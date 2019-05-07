import { ApiCollection } from './entities.model';

const featureName = 'Person';

class EntityMetaData {
  static entityDescription = 'None';
}

/******************************************************/
/* CREATE                                             */
/******************************************************/

export abstract class Create<T> {
  static entityDescription = featureName;
  static type = `[${Create.entityDescription}] Create`;
  constructor(public entity: T) {}
}

export abstract class CreateSuccess<T> {
  static entityDescription = featureName;
  static type = `[${Create.entityDescription}] Create Success`;
  constructor(public entity: T) {}
}

export abstract class CreateFailed<T> {
  static entityDescription = featureName;
  static type = `[${Create.entityDescription}] Create Failed`;
  constructor(public error: any) {}
}

/******************************************************/
/* READ                                               */
/******************************************************/

export abstract class Read<T> {
  static entityDescription = featureName;
  static type = `[${Read.entityDescription}] Read`;
}

export abstract class ReadMore<T> {
  static entityDescription = featureName;
  static type = `[${ReadMore.entityDescription}] Read More`;
}

export abstract class ReadSuccess<T> {
  static entityDescription = featureName;
  static type = `[${Read.entityDescription}] Read Success`;
  constructor(public apiCollection: ApiCollection<T>) {}
}

export abstract class ReadFailed<T> {
  static entityDescription = featureName;
  static type = `[${Read.entityDescription}] Read Failed`;
  constructor(public error: any) {}
}

/******************************************************/
/* UPDATE                                             */
/******************************************************/

export abstract class Update<T> {
  static entityDescription = featureName;
  static type = `[${Update.entityDescription}] Update`;
  constructor(public entity: T) {}
}

export abstract class UpdateSuccess<T> {
  static entityDescription = featureName;
  static type = `[${Update.entityDescription}] Update Success`;
  constructor(public entity: T) {}
}

export abstract class UpdateFailed<T> {
  static entityDescription = featureName;
  static type = `[${Update.entityDescription}] Update Failed`;
  constructor(public error: any) {}
}

/******************************************************/
/* DELETE                                             */
/******************************************************/

export abstract class Delete<T> {
  static entityDescription = featureName;
  static type = `[${Delete.entityDescription}] Delete`;
  constructor(public entity: T) {}
}

export abstract class DeleteSuccess<T> {
  static entityDescription = featureName;
  static type = `[${Delete.entityDescription}] Delete Success`;
  constructor(public entity: T) {}
}

export abstract class DeleteFailed<T> {
  static entityDescription = featureName;
  static type = `[${Delete.entityDescription}] Delete Failed`;
  constructor(public error: any) {}
}
