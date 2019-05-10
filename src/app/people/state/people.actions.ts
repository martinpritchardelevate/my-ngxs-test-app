import * as entityActions from '../../ngrx-entities';
import { Person } from './people.model';

const featureName = 'People';

/******************************************************/
/* LIST                                               */
/******************************************************/

export class List extends entityActions.List<Person, string> {
  static readonly entityDescription = `${featureName}`;
}

export class ListMore extends entityActions.ListMore<Person, string> {
  static readonly entityDescription = `${featureName}`;
}

export class ListSuccess extends entityActions.ListSuccess<Person> {
  static readonly entityDescription = `${featureName}`;
}

export class ListFailed extends entityActions.ListFailed<Person> {
  static readonly entityDescription = `${featureName}`;
}

/******************************************************/
/* CREATE                                             */
/******************************************************/

export class Create extends entityActions.Create<Person> {
  static readonly entityDescription = `${featureName}`;
}

export class CreateSuccess extends entityActions.CreateSuccess<Person> {
  static readonly entityDescription = `${featureName}`;
}

export class CreateFailed extends entityActions.CreateFailed<Person> {
  static readonly entityDescription = `${featureName}`;
}

/******************************************************/
/* READ                                               */
/******************************************************/

export class Read extends entityActions.Read<Person, Person> {
  static readonly entityDescription = `${featureName}`;
}

export class ReadSuccess extends entityActions.ReadSuccess<Person> {
  static readonly entityDescription = `${featureName}`;
}

export class ReadFailed extends entityActions.ReadFailed<Person> {
  static readonly entityDescription = `${featureName}`;
}

/******************************************************/
/* UPDATE                                             */
/******************************************************/

export class Update extends entityActions.Update<Person> {
  static readonly entityDescription = `${featureName}`;
}

export class UpdateSuccess extends entityActions.UpdateSuccess<Person> {
  static readonly entityDescription = `${featureName}`;
}

export class UpdateFailed extends entityActions.UpdateFailed<Person> {
  static readonly entityDescription = `${featureName}`;
}

/******************************************************/
/* DELETE                                             */
/******************************************************/

export class Delete extends entityActions.Delete<Person> {
  static readonly entityDescription = `${featureName}`;
}

export class DeleteSuccess extends entityActions.DeleteSuccess<Person> {
  static readonly entityDescription = `${featureName}`;
}

export class DeleteFailed extends entityActions.DeleteFailed<Person> {
  static readonly entityDescription = `${featureName}`;
}
