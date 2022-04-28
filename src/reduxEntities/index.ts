export {
  useGetAmmosQuery,
  useGetOneAmmoQuery,
  useGetArmorsQuery,
  useGetOneArmorQuery,
} from 'reduxEntities/api/extendedAPI';

export {
  useGetItemsQuery,
  useGetOneItemQuery,
  itemsAPI,
} from 'reduxEntities/api/gamesAPI';
export { setupStore } from 'reduxEntities/store';
export type { RootState, AppStore, AppDispatch } from 'reduxEntities/store';
export {
  setLoginData,
  logout,
  addFavorites,
  deleteItem,
} from 'reduxEntities/userInfo/userInfo';
export {
  useAppMainSelector,
  useAppDispatch,
} from 'reduxEntities/customHooks/customHooks';
//export { addFavorites } from './favorites/favorites';
