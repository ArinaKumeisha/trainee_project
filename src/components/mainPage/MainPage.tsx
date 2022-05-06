import React from 'react';
import style from './MainPage.module.css';
import { SuperButton } from 'common';

type PropsType = {
  onclickHandler: (title: string) => void;
};
export const MainPage = ({ onclickHandler }: PropsType) => {
  return (
    <div className={style.container}>
      <div className={style.settings}>
        <h1 className={style.title}> Elden Ring</h1>
        <SuperButton onClick={() => onclickHandler('items')} className={style.btn}>
          Items
        </SuperButton>
        <SuperButton onClick={() => onclickHandler('ammos')} className={style.btn}>
          Ammos
        </SuperButton>
      </div>
      <div className={style.description}>
        The Elden Ring is an amazing game released by FromSoftware in 2022. In our site
        you can learn everything about the heroes and much more
      </div>
    </div>
  );
};
