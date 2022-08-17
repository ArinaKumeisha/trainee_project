export {
  useGetItemsQuery,
  useGetOneItemQuery,
  useGetAmmosQuery,
  useGetOneAmmoQuery,
  useGetArmorsQuery,
  useGetOneArmorQuery,
  useGetAshesQuery,
  useGetOneAsheQuery,
  useGetBossesQuery,
  useGetOneBossQuery,
  useGetClassesQuery,
  useGetOneClassQuery,
  useGetCreaturesQuery,
  useGetOneCreatureQuery,
  useGetIncantationsQuery,
  useGetOneIncantationQuery,
  useGetWeaponsQuery,
  useGetOneWeaponQuery,
} from 'reduxEntities/api/gamesAPI';
export { setupStore } from 'reduxEntities/store';
export type { RootState, AppStore, AppDispatch } from 'reduxEntities/store';
export {
  setLoginData,
  logout,
  addFavorites,
  removeFavorites,
  addHistory,
  clearHistory,
} from 'reduxEntities/userInfo/userInfo';
export {
  useAppMainSelector,
  useAppDispatch,
} from 'reduxEntities/customHooks/customHooks';
export { setCurrentPage } from './pagination/pagination';
