import { produce } from 'immer';
import { ApiCollection } from './entities.model';

export class CRUD {

  static create<T extends { id: string }>(entity: T, selector: string = null) {
    return produce(draft => {
      const selected = selector ? draft[selector] : draft;
      selected.entities[ entity.id ] = entity;
      selected.ids.push( entity.id );
    });
  }

  static read<T extends { id: string }>(apiCollection: ApiCollection<T>, selector: string = null) {
    return produce(draft => {
      const selected = selector ? draft[selector] : draft;
      apiCollection.items.forEach(item => {
        if (!selected.entities[item.id]) {
          selected.ids.push(item.id);
        }
        selected.entities[item.id] = item;
      });
      selected.paging = apiCollection.paging;
    });
  }

  static update<T extends { id: string }>(entity: T, selector: string = null) {
    return produce(draft => {
      const selected = selector ? draft[selector] : draft;
      selected.entities[ entity.id ] = entity;
    });
  }

  static delete<T extends { id: string }>(entity: T, selector: string = null) {
    return produce(draft => {
      const selected = selector ? draft[selector] : draft;
      selected.ids = selected.ids.filter(id => id !== entity.id);
      if (selected.entities[entity.id]) {
        delete selected.entities[entity.id];
      }
    });
  }

}


