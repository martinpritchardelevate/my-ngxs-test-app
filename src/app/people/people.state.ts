import { createEntity, readyEntities, updateEntity, deleteEntity } from './entities.model';
import { Action, Selector, State, StateContext, Store, NgxsOnInit } from '@ngxs/store';
import * as actions from './people.actions';
import { PeopleStateModel, Person } from './people.model';



@State<PeopleStateModel>({
  name: 'people',
  defaults: {
    ids: ['1', '2'],
    entities: {
      ['1']: new Person('1', 'Lucy', 'Pritchard', 43),
      ['2']: new Person('2', 'Martin', 'Pritchard', 40)
    }
  }
})
export class PeopleState {

  @Selector()
  static list(state: PeopleStateModel): Array<Person> {
    return readyEntities(state);
  }

  constructor(private store: Store) {

  }

  @Action(actions.Create)
  create(context: StateContext<PeopleStateModel>, action: actions.Create) {
    context.setState(createEntity(action.person));
  }

  @Action(actions.Read)
  read(context: StateContext<PeopleStateModel>, action: actions.Read) {

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
