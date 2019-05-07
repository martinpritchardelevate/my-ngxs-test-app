import { patch, append, removeItem, insertItem, updateItem } from '@ngxs/store/operators';
import { take, tap } from 'rxjs/operators';
import produce, { isDraft } from 'immer';
import { ApiCollection, ApiCollectionPagingInfo } from './api-collection.model';

export class EntitiesStateModel<T extends { id: string }> {
  entities: { [id: string]: T };
  ids: string[];
  paging: ApiCollectionPagingInfo;
}

export function createEntity<T extends { id: string }>(entity: T) {
  return produce(draft => {
    draft.entities[ entity.id ] = entity;
    draft.ids.push( entity.id );
  });
}

export function readEntities<T extends { id: string }>(state: EntitiesStateModel<T>) {
    return state.ids.reduce((result, id) => {
      if (state.entities[id] !== undefined) {
        result.push(state.entities[id]);
      }
      return result;
    }, []);
}

export function addEntities<T extends { id: string }>(apiCollection: ApiCollection<T>) {
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


export function addEntity<T extends { id: string }>(entity: T) {
  return produce(draft => {
    draft.entities[ entity.id ] = entity;
  });
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

export function hasMore<T extends { id: string }>(state: EntitiesStateModel<T>) {
  return state.paging.pages > state.paging.pageNumber;
}

