export {
  useGetAmmosQuery,
  useGetOneAmmoQuery,
  useGetArmorsQuery,
  useGetOneArmorQuery,
} from 'reduxLayer/api/extendedAPI';

export { useGetItemsQuery, useGetOneItemQuery, itemsAPI } from 'reduxLayer/api/gamesAPI';
export { setupStore } from 'reduxLayer/store';
export type { RootState, AppStore, AppDispatch } from 'reduxLayer/store';
