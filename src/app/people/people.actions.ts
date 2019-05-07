import { Person } from './people.model';

const featureName = 'People';

export class Create {
  static type = `[${featureName}] Create`;
  constructor(public person: Person) {}
}

export class Read {
  static type = `[${featureName}] Read`;
}

export class Update {
  static type = `[${featureName}] Update`;
  constructor(public person: Person) {}
}

export class Delete {
  static type = `[${featureName}] Delete`;
  constructor(public person: Person) {}
}
