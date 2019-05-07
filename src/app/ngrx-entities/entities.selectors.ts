import { EntitiesStateModel } from './entities.model';

export const getList = <T extends { id: string }>(state: EntitiesStateModel<T>) => {
  return state.ids.reduce((result, id) => {
    if (state.entities[id] !== undefined) {
      result.push({...state.entities[id]});
    }
    return result;
  }, []);
};

export const hasMore = <T extends { id: string }>(state: EntitiesStateModel<T>) =>
  state.paging.pages > state.paging.pageNumber;

export const getNextPage = <T extends { id: string }>(state: EntitiesStateModel<T>) =>
  state.paging.pageNumber + 1;

