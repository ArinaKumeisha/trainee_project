import React from 'react';
import style from './ErrorPage.module.css';

export const ErrorPage = () => {
  return (
    <div className={style.block}>
      <h1 className={style.error}>There's nothing here!</h1>
    </div>
  );
};
