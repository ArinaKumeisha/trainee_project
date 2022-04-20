export {
  useGetAmmosQuery,
  useGetOneAmmoQuery,
  useGetArmorsQuery,
  useGetOneArmorQuery,
} from './api/extendedAPI';

export { useGetItemsQuery, useGetOneItemQuery } from './api/gamesAPI';
export { setupStore } from './store';
export type { RootState, AppStore, AppDispatch } from './store';
