import { Favorite } from 'reduxEntities/userInfo/userInfo';

export const getStorageName = (name: string) => {
  const storageObject = localStorage.getItem(name)!;
  return JSON.parse(storageObject)?.name !== name;
};

export const getValidStorageData = (name: string, password: string) => {
  const storageObject = localStorage.getItem(name)!;
  return (
    JSON.parse(storageObject)?.password === password &&
    JSON.parse(storageObject)?.name === name
  );
};

export const setUserData = (name: string, password: string, favorites: Favorite[]) => {
  localStorage.setItem(name, JSON.stringify({ name, password, favorites }));
};
