import React, { ChangeEvent } from 'react';
import { SearchElement } from 'components/mainPage';
import style from './MainPage.module.css';

type PropsType = {
  onSearchHandler: (value: ChangeEvent<HTMLInputElement>) => void;
  searchTitle: string;
  onclickHandler: (title: string) => void;
  filteredTitles: { title: string }[];
};
export const MainPage = ({
  onSearchHandler,
  searchTitle,
  onclickHandler,
  filteredTitles,
}: PropsType) => {
  return (
    <div className={style.container}>
      <div className={style.settings}>
        <h1 className={style.title}> Elden Ring</h1>

        <SearchElement
          getItem={onclickHandler}
          searchItem={onSearchHandler}
          filteredTitles={filteredTitles}
          searchTitle={searchTitle}
        />
      </div>
      <div className={style.description}>
        The Elden Ring is an amazing game released by FromSoftware in 2022. In our site
        you can learn everything about the heroes and much more
      </div>
    </div>
  );
};
