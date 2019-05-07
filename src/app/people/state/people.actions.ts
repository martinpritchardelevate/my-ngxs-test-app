import { Person } from './people.model';
import * as entityActions from '../../ngrx-entities';

const featureName = 'People';

export class Create extends entityActions.Create<Person> {
  static readonly entityDescription = `${featureName}`;
}

export class Refresh extends entityActions.Refresh<Person> {
  static readonly entityDescription = `${featureName}`;
}
export class Read extends entityActions.Read<Person> {
  static readonly entityDescription = `${featureName}`;
}

export class ReadMore extends entityActions.ReadMore<Person> {
  static readonly entityDescription = `${featureName}`;
}

export class Update extends entityActions.Update<Person> {
  static readonly entityDescription = `${featureName}`;
}

export class Delete extends entityActions.Delete<Person> {
  static readonly entityDescription = `${featureName}`;
}
