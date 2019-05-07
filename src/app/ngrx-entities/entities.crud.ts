import { produce } from 'immer';
import { ApiCollection, EntitiesStateModel } from './entities.model';

export class CRUD {

  static setBusy<T extends { id: string }>(selector: string = null) {
    return produce(draft => {
      const selected: EntitiesStateModel<T> = selector ? draft[selector] : draft;
      selected.isBusy = true;
    });
  }

  static create<T extends { id: string }>(entity: T, selector: string = null) {
    return produce(draft => {
      const selected: EntitiesStateModel<T> = selector ? draft[selector] : draft;
      selected.entities[ entity.id ] = entity;
      selected.ids.push( entity.id );
      selected.isBusy = false;
    });
  }

  static read<T extends { id: string }>(apiCollection: ApiCollection<T>, selector: string = null) {
    return produce(draft => {
      const selected: EntitiesStateModel<T> = selector ? draft[selector] : draft;
      apiCollection.items.forEach(item => {
        if (!selected.entities[item.id]) {
          selected.ids.push(item.id);
        }
        selected.entities[item.id] = item;
      });
      selected.paging = apiCollection.paging;
      selected.isBusy = false;
    });
  }

  static update<T extends { id: string }>(entity: T, selector: string = null) {
    return produce(draft => {
      const selected: EntitiesStateModel<T> = selector ? draft[selector] : draft;
      selected.entities[ entity.id ] = { ...entity };
      selected.isBusy = false;
    });
  }

  static delete<T extends { id: string }>(entity: T, selector: string = null) {
    return produce(draft => {
      const selected: EntitiesStateModel<T> = selector ? draft[selector] : draft;
      selected.ids = selected.ids.filter(id => id !== entity.id);
      if (selected.entities[entity.id]) {
        delete selected.entities[entity.id];
      }
      selected.isBusy = false;
    });
  }

}


