import { catchError } from 'rxjs/operators';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { hasData, hasMore, getNextPage, getList, CRUD, success } from '../../ngrx-entities';
import * as actions from './people.actions';
import { PeopleStateModel, Person } from './people.model';
import { PeopleService } from './people.service';


@State<PeopleStateModel>({
  name: 'people',
  defaults: new PeopleStateModel()
})
export class PeopleState {

  @Selector()
  static list(state: PeopleStateModel): Array<Person> {
    return getList(state);
  }

  @Selector()
  static hasMore(state: PeopleStateModel): boolean {
    return hasMore(state);
  }

  @Selector()
  static hasData(state: PeopleStateModel): boolean {
    return hasData(state);
  }

  constructor(
      private store: Store,
      private peopleService: PeopleService) {

  }

  /******************************************************/
  /* LIST                                               */
  /******************************************************/

  @Action([actions.List])
  list = (context: StateContext<PeopleStateModel>, action: actions.List) => {
    context.setState(CRUD.setBusy());
    return this.peopleService.list()
      .pipe(
        success(people => context.dispatch(new actions.ListSuccess(people))),
        catchError(error => context.dispatch(new actions.ListFailed(error))));
  }

  @Action(actions.ListMore)
  listMore = (context: StateContext<PeopleStateModel>, action: actions.ListMore) => {
    context.setState(CRUD.setBusy());
    return this.peopleService.list(getNextPage(context.getState()))
      .pipe(
        success(people => context.dispatch(new actions.ListSuccess(people))),
        catchError(error => context.dispatch(new actions.ListFailed(error))));
  }

  @Action([actions.ListSuccess])
  listSuccess = (context: StateContext<PeopleStateModel>, action: actions.ListSuccess) =>
    context.setState(CRUD.list(action.payload))

  /******************************************************/
  /* CREATE                                             */
  /******************************************************/

  @Action(actions.Create)
  create = (context: StateContext<PeopleStateModel>, action: actions.Create) => {
    context.setState(CRUD.setBusy());
    return this.peopleService.create(action.payload)
      .pipe(
        success(person => context.dispatch(new actions.CreateSuccess(person))),
        catchError(error => context.dispatch(new actions.CreateFailed(error))));
  }

  @Action(actions.CreateSuccess)
  createSuccess = (context: StateContext<PeopleStateModel>, action: actions.CreateSuccess) =>
    context.setState(CRUD.create(action.payload))


  /******************************************************/
  /* READ                                               */
  /******************************************************/

  @Action(actions.Read)
  read = (context: StateContext<PeopleStateModel>, action: actions.Read) => {
    context.setState(CRUD.setBusy());
    return this.peopleService.read(action.payload)
      .pipe(
        success(person => context.dispatch(new actions.ReadSuccess(person))),
        catchError(error => context.dispatch(new actions.ReadFailed(error))));
  }

  @Action([actions.ReadSuccess])
  readSuccess = (context: StateContext<PeopleStateModel>, action: actions.ReadSuccess) =>
    context.setState(CRUD.read(action.payload))



  /******************************************************/
  /* UPDATE                                             */
  /******************************************************/

  @Action(actions.Update)
  update = (context: StateContext<PeopleStateModel>, action: actions.Update) => {
    context.setState(CRUD.setBusy());
    return this.peopleService.update(action.payload)
      .pipe(
        success(person => context.dispatch(new actions.UpdateSuccess(person))),
        catchError(error => context.dispatch(new actions.UpdateFailed(error))));
  }

  @Action([actions.UpdateSuccess])
  updateSuccess = (context: StateContext<PeopleStateModel>, action: actions.UpdateSuccess) =>
    context.setState(CRUD.update(action.payload))

  /******************************************************/
  /* DELETE                                             */
  /******************************************************/

  @Action(actions.Delete)
  delete = (context: StateContext<PeopleStateModel>, action: actions.Delete) => {
    context.setState(CRUD.setBusy());
    return this.peopleService.delete(action.payload)
      .pipe(
        success(person => context.dispatch(new actions.DeleteSuccess(person))),
        catchError(error => context.dispatch(new actions.DeleteFailed(error))));
  }

  @Action([actions.DeleteSuccess])
  deleteSuccess = (context: StateContext<PeopleStateModel>, action: actions.DeleteSuccess) =>
    context.setState(CRUD.delete(action.payload))

}
