import { EntitiesStateModel } from './entities.model';

export interface PeopleStateModel extends EntitiesStateModel<Person> {
  ids: Array<string>;
  entities: { [id: string]: Person };
}

export class Person {
  constructor(
    public id: string,
    public forename: string,
    public surname: string,
    public age: number) {}
}
