import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { recognizeError, setLoginData, useAppDispatch } from 'reduxEntities';
import { Registration } from 'headerComponents';
import { getStorageName, setUserData } from 'utilities';

export const RegistrationContainer = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const completeRegistration = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validUserData = name.trim().length >= 5 && password.trim().length >= 5;

    if (!validUserData) {
      dispatch(recognizeError('You must enter more than 5 characters!'));
    } else if (!getStorageName(name)) {
      dispatch(recognizeError('User with this name exists'));
    } else {
      setUserData(name, password);
      dispatch(setLoginData({ name, password }));
      return navigate('/');
    }
  };

  return (
    <Registration
      name={name}
      setName={setName}
      password={password}
      setPassword={setPassword}
      completeRegistration={completeRegistration}
    />
  );
};
