import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainPage } from 'components/mainPage';
import { titlesForSearch, filteredMainTitles } from 'utilities';
import { addHistory, useAppDispatch } from 'reduxEntities';

export const MainPageContainer = () => {
  const navigate = useNavigate();
  const [searchTitle, setSearchTitle] = useState('');
  const dispatch = useAppDispatch();

  const onclickHandler = (title: string) => {
    dispatch(addHistory(title));
    navigate(`/${title}`);
  };

  const onSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTitle(e.currentTarget.value);
  };

  return (
    <MainPage
      searchTitle={searchTitle}
      onSearchHandler={onSearchHandler}
      onclickHandler={onclickHandler}
      filteredTitles={filteredMainTitles(titlesForSearch, searchTitle)}
    />
  );
};
