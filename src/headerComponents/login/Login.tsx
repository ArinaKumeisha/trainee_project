import React, { ChangeEvent, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import style from 'headerComponents/registration/Registration.module.css';
import s from 'common/commonStyle/Common.module.css';

type Props = {
  name: string;
  error: string;
  password: string;
  setName: (name: string) => void;
  setError: (error: string) => void;
  setPassword: (password: string) => void;
  completeLogin: (event: FormEvent<HTMLFormElement>) => void;
};

export const Login = ({
  name,
  error,
  setName,
  setError,
  password,
  setPassword,
  completeLogin,
}: Props) => {
  const enteredName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
    setError('');
  };

  const enteredPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
    setError('');
  };
  return (
    <div className={style.block}>
      <form onSubmit={completeLogin}>
        <div className={style.form}>
          <div className={style.text}>Login</div>
          <input
            value={name}
            onChange={enteredName}
            placeholder="enter your name"
            className={s.inputAuth}
          />
          <input
            value={password}
            onChange={enteredPassword}
            placeholder="create password"
            className={s.inputAuth}
          />
          <input type="submit" className={s.btnSubmit} />
        </div>
      </form>
      <div className={style.register}>
        <div className={error && s.error}>{error}</div>
        {error === 'User with this name does not exist!' && (
          <Link to={'/registration'} className={style.link}>
            Registration
          </Link>
        )}
      </div>
    </div>
  );
};
