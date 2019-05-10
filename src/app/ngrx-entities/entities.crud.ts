import { produce, Draft } from 'immer';
import { ApiCollection, ApiCollectionPagingInfo } from './entities.model';

/******************************************************/
/* CRUD OPERATORS                                     */
/******************************************************/
/* Please use these helpers in your *.state.ts files  */
/* to make sure we deal with CRUD operations in a     */
/* standardized way.                                  */
/******************************************************/

export class CRUD {

    static list<T extends { id: string }>(apiCollection: ApiCollection<T>) {
        return produce(draft => {
            apiCollection.items.forEach(item => {
                if (!draft.entities[item.id]) {
                    draft.ids.push(item.id);
                }
                draft.entities[item.id] = item as Draft<T>;
            });
            draft.paging = apiCollection.paging;
            draft.isBusy = false;
        });
    }

    static create<T extends { id: string }>(entity: T) {
        return produce(draft => {
            draft.entities[entity.id] = entity as Draft<T>;
            draft.ids.push(entity.id);
            draft.isBusy = false;
        });
    }

    static read<T extends { id: string }>(entity: T) {
        return produce(draft => {
            if (!draft.entities[entity.id]) {
                draft.ids.push(entity.id);
            }
            draft.entities[entity.id] = Object.assign({}, entity) as Draft<T>;
            draft.isBusy = false;
        });
    }

    static update<T extends { id: string }>(entity: T) {
        return produce(draft => {
            draft.entities[entity.id] = Object.assign({}, entity) as Draft<T>;
            draft.isBusy = false;
        });
    }

    static delete<T extends { id: string }>(entity: T) {
        return produce(draft => {
            draft.ids = draft.ids.filter(id => id !== entity.id);
            if (draft.entities[entity.id]) {
                delete draft.entities[entity.id];
            }
            draft.isBusy = false;
        });
    }

    static setBusy<T extends { id: string }>() {
        return produce(draft => {
            draft.isBusy = true;
        });
    }

    static clearList<T extends { id: string }>() {
        return produce(draft => {
            draft.ids = [];
            draft.entities = {};
            draft.paging = new ApiCollectionPagingInfo();
            draft.isBusy = true;
        });
    }

}


