import { PayloadAction } from '@reduxjs/toolkit';
import { Users } from 'reduxEntities/userInfo/userInfo';

export const savingPreviousState =
  (store: any) => (next: Function) => (action: PayloadAction<Users>) => {
    let result;
    let currentStore = store.getState();
    let itemsFavorites;
    let itemHistory;

    if (action.type === 'user/setLoginData') {
      if (localStorage.getItem(currentStore.userInfo.user.name)) {
        itemsFavorites = JSON.parse(
          localStorage.getItem(currentStore.userInfo.user.name)!,
        ).favorites;

        if (localStorage.getItem(currentStore.userInfo.user.name)!) {
          itemHistory = JSON.parse(
            localStorage.getItem(currentStore.userInfo.user.name)!,
          ).history;
        }
      }
      localStorage.setItem(
        currentStore.userInfo.user.name,
        JSON.stringify({
          name: currentStore.userInfo.user.name,
          password: currentStore.userInfo.user.password,
          favorites: itemsFavorites,
          history: itemHistory,
        }),
      );
      result = next(action);
    } else {
      result = next(action);
    }
    return result;
  };
