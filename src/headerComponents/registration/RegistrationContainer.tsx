import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setLoginData, useAppDispatch } from 'reduxEntities';
import { Registration } from 'headerComponents';
import { getStorageName, setUserData } from 'utilities';

export const RegistrationContainer = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const completeRegistration = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validUserData = name.trim().length >= 5 && password.trim().length >= 5;

    if (!validUserData) {
      setError('You must enter more than 5 characters!');
    } else if (!getStorageName(name)) {
      setError('User with this name exists');
    } else {
      setUserData(name, password, []);
      dispatch(setLoginData({ name, password, favorites: [] }));
      return navigate('/');
    }
  };

  return (
    <Registration
      error={error}
      name={name}
      setName={setName}
      setError={setError}
      password={password}
      setPassword={setPassword}
      completeRegistration={completeRegistration}
    />
  );
};
