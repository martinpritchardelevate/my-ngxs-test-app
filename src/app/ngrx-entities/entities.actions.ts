
const featureName = 'Person';

class EntityMetaData {
  static entityDescription = 'None';
}

export abstract class Create<T> {
  static entityDescription = featureName;
  static type = `[${Create.entityDescription}] Create`;
  constructor(public entity: T) {}
}

export abstract class Refresh<T> {
  static entityDescription = featureName;
  static type = `[${Refresh.entityDescription}] Refresh`;
}
export abstract class Read<T> {
  static entityDescription = featureName;
  static type = `[${Read.entityDescription}] Read`;
}

export abstract class ReadMore<T> {
  static entityDescription = featureName;
  static type = `[${ReadMore.entityDescription}] Read More`;
}

export abstract class Update<T> {
  static entityDescription = featureName;
  static type = `[${Update.entityDescription}] Update`;
  constructor(public entity: T) {}
}

export abstract class Delete<T> {
  static entityDescription = featureName;
  static type = `[${Delete.entityDescription}] Delete`;
  constructor(public entity: T) {}
}
