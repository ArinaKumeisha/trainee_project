import React from 'react';
import { clearHistory, useAppDispatch, useAppMainSelector } from 'reduxEntities';
import style from './History.module.css';
import { useNavigate } from 'react-router-dom';
import { cutString } from 'utilities';
import { SuperButton } from 'common';

export const History = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const history = useAppMainSelector(state => state.userInfo.user.history);

  const backToSearch = (name: string) => {
    navigate(`/${name}`);
  };
  const clearHistoryHandler = () => {
    dispatch(clearHistory());
  };
  const historyItems = history.map((item, index) => {
    return (
      <button key={index} className={style.item} onClick={() => backToSearch(item)}>
        title: <span className={style.letter}>{cutString(item)}</span>
      </button>
    );
  });
  return (
    <div className={style.container}>
      {history.length ? (
        <>
          <div className={style.items}>{historyItems}</div>
          <SuperButton onClick={clearHistoryHandler}>clear all</SuperButton>
        </>
      ) : (
        <h1>There's nothing here!</h1>
      )}
    </div>
  );
};
