import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainPage } from 'components/mainPage';
import { titlesForSearch, filteredMainTitles } from 'utilities';

export const MainPageContainer = () => {
  const navigate = useNavigate();
  const [searchTitle, setSearchTitle] = useState('');

  const onclickHandler = (title: string) => {
    navigate(`/${title}`);
  };

  const onSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTitle(e.currentTarget.value);
  };

  return (
    <div>
      <MainPage
        searchTitle={searchTitle}
        onSearchHandler={onSearchHandler}
        onclickHandler={onclickHandler}
        filteredTitles={filteredMainTitles(titlesForSearch, searchTitle)}
      />
    </div>
  );
};
