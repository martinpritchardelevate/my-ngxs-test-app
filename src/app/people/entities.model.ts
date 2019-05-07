import { patch, append, removeItem, insertItem, updateItem } from '@ngxs/store/operators';
import { take, tap } from 'rxjs/operators';
import produce, { isDraft } from 'immer';

export interface EntitiesStateModel<T extends { id: string }> {
  entities: { [id: string]: T };
  ids: string[];
}

export function createEntity<T extends { id: string }>(entity: T) {
  return produce(draft => {
    draft.entities[ entity.id ] = entity;
    draft.ids.push( entity.id );
  });
}

export function readyEntities<T extends { id: string }>(state: EntitiesStateModel<T>) {
    return state.ids.reduce((result, id) => {
      if (state.entities[id] !== undefined) {
        result.push(state.entities[id]);
      }
      return result;
    }, []);
}

export function updateEntity<T extends { id: string }>(entity: T) {
  return produce(draft => {
    draft.entities[ entity.id ] = entity;
  });
}

export function deleteEntity<T extends { id: string }>(entity: T) {
  return produce(draft => {
    draft.ids = draft.ids.filter(id => id !== entity.id);
    if (draft.entities[entity.id]) {
      delete draft.entities[entity.id];
    }
  });
}

