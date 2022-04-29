import React from 'react';
import { useAppMainSelector } from 'reduxEntities';
import style from './History.module.css';
import { useNavigate } from 'react-router-dom';
import { cutString } from 'utilities';

export const History = () => {
  const navigate = useNavigate();
  const history = useAppMainSelector(state => state.userInfo.user.history);
  const handler = (name: string) => {
    navigate(`/${name}`);
  };

  return (
    <div className={style.container}>
      {history.length ? (
        history.map((item, index) => {
          return (
            <button key={index} className={style.item} onClick={() => handler(item)}>
              title: <span className={style.letter}>{cutString(item)}</span>
            </button>
          );
        })
      ) : (
        <h1>There's nothing here!</h1>
      )}
    </div>
  );
};
