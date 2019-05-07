import { hasMore, getNextPage, getList, CRUD } from '../../ngrx-entities';
import { tap } from 'rxjs/operators';
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

  @Action(actions.Create)
  create = (context: StateContext<PeopleStateModel>, action: actions.Create) =>
    this.peopleService
      .create(action.entity)
      .pipe(tap(person => context.setState(CRUD.create(person))))

  @Action([actions.Read, actions.Refresh])
  read = (context: StateContext<PeopleStateModel>, action: actions.Create) =>
    this.peopleService
      .read()
      .pipe(tap(people => context.setState(CRUD.read(people))))

  @Action(actions.ReadMore)
  readMore = (context: StateContext<PeopleStateModel>, action: actions.Create) =>
    this.peopleService
      .read(getNextPage(context.getState()))
      .pipe(tap(people => context.setState(CRUD.read(people))))

  @Action(actions.Update)
  update = (context: StateContext<PeopleStateModel>, action: actions.Update) =>
    this.peopleService
      .update(action.entity)
      .pipe(tap(person => context.setState(CRUD.update(action.entity))))

  @Action(actions.Delete)
  delete = (context: StateContext<PeopleStateModel>, action: actions.Delete) =>
    this.peopleService
      .delete(action.entity)
      .pipe(tap(person => context.setState(CRUD.delete(action.entity))))

}
