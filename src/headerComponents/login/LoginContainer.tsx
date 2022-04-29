import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Login } from 'headerComponents';
import { getStorageName, getValidStorageData } from 'utilities';
import { setLoginData, useAppDispatch } from 'reduxEntities';

export const LoginContainer = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const completeLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (getStorageName(name)) {
      setError('User with this name does not exist!');
    } else if (!getValidStorageData(name, password)) {
      setError('Wrong password or name!');
    } else {
      const userData = JSON.parse(localStorage.getItem(name)!);
      dispatch(
        setLoginData({
          name,
          password,
          favorites: userData.favorites,
          history: userData.history,
        }),
      );
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
