import { ApiCollection } from './entities.model';

/******************************************************/
/* CRUD + LIST ACTIONS                                */
/******************************************************/
/* In a effort to standardize crud operations, please */
/* use these actions as the base classes of new       */
/* list/crud style operations                         */
/******************************************************/

const featureName = 'None';

export const getType = (feature: string, actionName: string) =>
    `[${feature}] ${actionName}`;

/******************************************************/
/* LIST                                               */
/******************************************************/

export abstract class List<T, Y> {
    static action = 'List';
    static type = getType(featureName, List.action);
    constructor(public payload: Y) {}
}

export abstract class ListMore<T, Y> {
    static action = 'List More';
    static type = getType(featureName, ListMore.action);
    constructor(public payload: Y) {}
}

export abstract class ListSuccess<T> {
    static action = 'List Success';
    static type = getType(featureName, ListSuccess.action);
    constructor(public payload: ApiCollection<T>) { }
}

export abstract class ListFailed<T> {
    static action = 'List Failed';
    static type = getType(featureName, ListFailed.action);
    constructor(public error: any) { }
}

/******************************************************/
/* CREATE                                             */
/******************************************************/

export abstract class Create<T> {
    static action = 'Create';
    static type = getType(featureName, Create.action);
    constructor(public payload: T) { }
}

export abstract class CreateSuccess<T> {
    static action = 'Create Success';
    static type = getType(featureName, CreateSuccess.action);
    constructor(public payload: T) { }
}

export abstract class CreateFailed<T> {
    static action = 'Create Failed';
    static type = getType(featureName, CreateFailed.action);
    constructor(public error: any) { }
}

/******************************************************/
/* READ                                               */
/******************************************************/

export abstract class Read<T, Y> {
    static action = 'Read';
    static type = getType(featureName, Read.action);
    constructor(public payload: Y) { }
}

export abstract class ReadSuccess<T> {
    static action = 'Read Success';
    static type = getType(featureName, ReadSuccess.action);
    constructor(public payload: T) { }
}

export abstract class ReadFailed<T> {
    static action = 'Read Failed';
    static type = getType(featureName, ReadFailed.action);
    constructor(public error: any) { }
}

/******************************************************/
/* UPDATE                                             */
/******************************************************/

export abstract class Update<T> {
    static action = 'Update';
    static type = getType(featureName, Update.action);
    constructor(public payload: T) { }
}

export abstract class UpdateSuccess<T> {
    static action = 'Update Success';
    static type = getType(featureName, UpdateSuccess.action);
    constructor(public payload: T) { }
}

export abstract class UpdateFailed<T> {
    static action = 'Update Failed';
    static type = getType(featureName, UpdateFailed.action);
    constructor(public error: any) { }
}

/******************************************************/
/* DELETE                                             */
/******************************************************/

export abstract class Delete<T> {
    static action = 'Delete';
    static type = getType(featureName, Delete.action);
    constructor(public payload: T) { }
}

export abstract class DeleteSuccess<T> {
    static action = 'Delete Success';
    static type = getType(featureName, DeleteSuccess.action);
    constructor(public payload: T) { }
}

export abstract class DeleteFailed<T> {
    static action = 'Delete Failed';
    static type = getType(featureName, DeleteFailed.action);
    constructor(public error: any) { }
}
