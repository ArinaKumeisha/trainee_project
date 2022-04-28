import React, { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Login } from 'headerComponents';
import { getStorageName, getValidStorageData } from 'utilities';
import { addFavorites, setLoginData, useAppDispatch } from 'reduxEntities';
import type { Favorite } from 'reduxEntities/userInfo/userInfo';

export const LoginContainer = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    let items;
    if (localStorage.getItem(name)) {
      items = JSON.parse(localStorage.getItem(name)!).favorites;
    }
    items && items.forEach((item: Favorite) => dispatch(addFavorites(item)));
  }, [name]);

  const completeLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (getStorageName(name)) {
      setError('User with this name does not exist!');
    } else if (!getValidStorageData(name, password)) {
      setError('Wrong password or name!');
    } else {
      const userData = JSON.parse(localStorage.getItem(name)!);
      dispatch(setLoginData({ name, password, favorites: userData.favorites }));
      return navigate('/');
    }
  };

  return (
    <Login
      name={name}
      error={error}
      setName={setName}
      setError={setError}
      password={password}
      setPassword={setPassword}
      completeLogin={completeLogin}
    />
  );
};
