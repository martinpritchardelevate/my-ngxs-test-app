import { hasMore, getNextPage, getList, CRUD, success, ApiCollection } from '../../ngrx-entities';
import { map, tap, catchError } from 'rxjs/operators';
import { asapScheduler } from 'rxjs';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
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

  constructor(
      private store: Store,
      private peopleService: PeopleService) {

  }

  /******************************************************/
  /* CREATE                                             */
  /******************************************************/

  @Action(actions.Create)
  create = (context: StateContext<PeopleStateModel>, action: actions.Create) =>
    this.peopleService.create(action.entity)
      .pipe(
        success(person => context.dispatch(new actions.CreateSuccess(person))),
        catchError(error => context.dispatch(new actions.CreateFailed(error))))

  @Action(actions.CreateSuccess)
  createSuccess = (context: StateContext<PeopleStateModel>, action: actions.CreateSuccess) =>
    context.setState(CRUD.create(action.entity))

  /******************************************************/
  /* READ                                               */
  /******************************************************/

  @Action([actions.Read])
  read = (context: StateContext<PeopleStateModel>, action: actions.Create) =>
    this.peopleService.read()
      .pipe(
        success(people => context.dispatch(new actions.ReadSuccess(people))),
        catchError(error => context.dispatch(new actions.ReadFailed(error))))


  @Action(actions.ReadMore)
  readMore = (context: StateContext<PeopleStateModel>, action: actions.ReadMore) =>
    this.peopleService.read(getNextPage(context.getState()))
      .pipe(
        success(people => context.dispatch(new actions.ReadSuccess(people))),
        catchError(error => context.dispatch(new actions.ReadFailed(error))))

  @Action([actions.ReadSuccess])
  readSuccess = (context: StateContext<PeopleStateModel>, action: actions.ReadSuccess) =>
    context.setState(CRUD.read(action.apiCollection))

  /******************************************************/
  /* UPDATE                                             */
  /******************************************************/

  @Action(actions.Update)
  update = (context: StateContext<PeopleStateModel>, action: actions.Update) =>
    this.peopleService.update(action.entity)
      .pipe(
        success(person => context.dispatch(new actions.UpdateSuccess(person))),
        catchError(error => context.dispatch(new actions.UpdateFailed(error))))

  @Action([actions.UpdateSuccess])
  updateSuccess = (context: StateContext<PeopleStateModel>, action: actions.UpdateSuccess) =>
    context.setState(CRUD.update(action.entity))

  /******************************************************/
  /* DELETE                                             */
  /******************************************************/

  @Action(actions.Delete)
  delete = (context: StateContext<PeopleStateModel>, action: actions.Delete) =>
    this.peopleService.delete(action.entity)
      .pipe(
        success(person => context.dispatch(new actions.DeleteSuccess(person))),
        catchError(error => context.dispatch(new actions.DeleteFailed(error))))

  @Action([actions.DeleteSuccess])
  deleteSuccess = (context: StateContext<PeopleStateModel>, action: actions.DeleteSuccess) =>
    context.setState(CRUD.delete(action.entity))

}
