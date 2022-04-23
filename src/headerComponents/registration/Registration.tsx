import React, { ChangeEvent, FormEvent } from 'react';
import { recognizeError, useAppDispatch, useAppMainSelector } from 'reduxEntities';
import style from './Registration.module.css';
import s from 'common/commonStyle/Common.module.css';

type Props = {
  name: string;
  password: string;
  setName: (name: string) => void;
  setPassword: (password: string) => void;
  completeRegistration: (event: FormEvent<HTMLFormElement>) => void;
};

export const Registration = ({
  name,
  setName,
  password,
  setPassword,
  completeRegistration,
}: Props) => {
  const dispatch = useAppDispatch();
  const error = useAppMainSelector(state => state.registrationReducer.error);

  const createName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
    dispatch(recognizeError(''));
  };

  const createPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  return (
    <div className={style.block}>
      <form onSubmit={completeRegistration}>
        <div className={style.form}>
          <div className={style.text}>Registration</div>
          <input
            value={name}
            onChange={createName}
            placeholder="enter name"
            className={s.inputAuth}
          />
          <input
            value={password}
            onChange={createPassword}
            placeholder="create password"
            className={s.inputAuth}
          />
          <input type="submit" className={s.btnSubmit} />
        </div>
      </form>
      {<div className={s.error}>{error}</div>}
    </div>
  );
};
