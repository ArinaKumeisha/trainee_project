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
  recognizeError,
  logout,
} from 'reduxEntities/registration/registration';
export {
  useAppMainSelector,
  useAppDispatch,
} from 'reduxEntities/customHooks/customHooks';
