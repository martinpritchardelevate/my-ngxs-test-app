import { EntitiesStateModel } from './entities.model';
import { ApiCollectionPagingInfo } from './api-collection.model';

export class PeopleStateModel implements EntitiesStateModel<Person> {
  constructor(
    public paging: ApiCollectionPagingInfo = new ApiCollectionPagingInfo(),
    public ids: Array<string> = [],
    public entities: { [id: string]: Person } = {}
    ) { }
}

export class Person {
  constructor(
    public id: string,
    public forename: string,
    public surname: string,
    public age: number) {}
}
