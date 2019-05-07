import { addEntities, createEntity, readEntities, updateEntity, deleteEntity, hasMore, EntitiesStateModel } from './entities.model';
import { ApiCollectionPagingInfo } from './api-collection.model';
import { tap, take, map, mergeMap } from 'rxjs/operators';
import { Action, Selector, State, StateContext, Store, NgxsOnInit } from '@ngxs/store';
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
    return readEntities(state);
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
  create(context: StateContext<PeopleStateModel>, action: actions.Create) {
    context.setState(createEntity(action.person));
  }

  @Action([actions.Read, actions.Refresh])
  read(context: StateContext<PeopleStateModel>, action: actions.Create) {
    return this.peopleService.readPeople()
      .pipe(tap(people => context.setState(addEntities(people))));
  }

  @Action(actions.ReadMore)
  readMore(context: StateContext<PeopleStateModel>, action: actions.Create) {
    const current = context.getState();
    const pageNo = current.paging.pageNumber + 1;
    return this.peopleService.readPeople(pageNo)
      .pipe(tap(people => context.setState(addEntities(people))));
  }

  @Action(actions.Update)
  update(context: StateContext<PeopleStateModel>, action: actions.Update) {
    context.setState(updateEntity(action.person));
  }

  @Action(actions.Delete)
  delete(context: StateContext<PeopleStateModel>, action: actions.Delete) {
    context.setState(deleteEntity(action.person));
  }

}
