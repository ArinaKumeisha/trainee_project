import React from 'react';
import errorPicture from 'images/error.jpg';
import style from './ReserveComponent.module.css';

export const ReserveComponent = () => {
  return (
    <div className={style.container}>
      <img src={errorPicture} alt="error" />
    </div>
  );
};
