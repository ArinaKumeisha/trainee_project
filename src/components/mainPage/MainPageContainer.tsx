import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MainPage } from 'components/mainPage';
import { addHistory, useAppDispatch } from 'reduxEntities';

export const MainPageContainer = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onclickHandler = (title: string) => {
    dispatch(addHistory(title));
    navigate(`/${title}`);
  };

  return <MainPage onclickHandler={onclickHandler} />;
};
