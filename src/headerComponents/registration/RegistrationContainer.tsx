import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  recognizeError,
  setInitialization,
  setRegistrationData,
  useAppDispatch,
  useAppMainSelector,
} from 'reduxEntities';
import { Registration } from 'headerComponents';

export const RegistrationContainer = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const users = useAppMainSelector(state => state.registrationReducer.users);

  const completeRegistration = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validUserData = name.trim().length >= 5 && password.trim().length >= 5;
    const wrongUserName = users.find(el => el.name === name);

    if (!validUserData) {
      dispatch(recognizeError('You must enter more than 5 characters!'));
      dispatch(setInitialization(true));
    } else if (wrongUserName?.name) {
      dispatch(recognizeError('User with this name exists'));
      dispatch(setInitialization(true));
    } else {
      dispatch(setRegistrationData({ name, password }));
      dispatch(recognizeError(''));
      dispatch(setInitialization(true));
      navigate('/');
    }
  };

  return (
    <>
      <Registration
        name={name}
        setName={setName}
        password={password}
        setPassword={setPassword}
        completeRegistration={completeRegistration}
      />
    </>
  );
};
