import { produce } from 'immer';
import { ApiCollection } from './entities.model';

export class CRUD {

  static create<T extends { id: string }>(entity: T) {
    return produce(draft => {
      draft.entities[ entity.id ] = entity;
      draft.ids.push( entity.id );
    });
  }

  static read<T extends { id: string }>(apiCollection: ApiCollection<T>) {
    return produce(draft => {
      apiCollection.items.forEach(item => {
        if (!draft.entities[item.id]) {
          draft.ids.push(item.id);
        }
        draft.entities[item.id] = item;
      });
      draft.paging = apiCollection.paging;
    });
  }

  static update<T extends { id: string }>(entity: T) {
    return produce(draft => {
      draft.entities[ entity.id ] = entity;
    });
  }

  static delete<T extends { id: string }>(entity: T) {
    return produce(draft => {
      draft.ids = draft.ids.filter(id => id !== entity.id);
      if (draft.entities[entity.id]) {
        delete draft.entities[entity.id];
      }
    });
  }

}


