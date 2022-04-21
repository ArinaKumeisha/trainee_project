import React, { ChangeEvent } from 'react';
import style from './SearchElement.module.css';

type Props = {
  filteredTitles: { title: string }[];
  searchItem: (value: ChangeEvent<HTMLInputElement>) => void;
  searchTitle: string;
  getItem: (title: string) => void;
};

export const SearchElement = ({
  filteredTitles,
  searchItem,
  searchTitle,
  getItem,
}: Props) => {
  const searchTitles = filteredTitles.map((element, index) => (
    <li
      key={element.title + index}
      className={style.autoCompleteItem}
      onClick={() => getItem(element.title)}
    >
      {element.title}
    </li>
  ));
  const validElement = filteredTitles.find(elem => elem.title === searchTitle);

  const enterPressed = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter' && validElement) {
      getItem(validElement.title);
    }
  };

  return (
    <div className={style.form}>
      <form className={style.searchForm}>
        <input
          placeholder="search element"
          onChange={searchItem}
          className={style.searchInput}
          onKeyPress={enterPressed}
        />
        <ul className={style.autoComplete}>{searchTitle ? searchTitles : null}</ul>
      </form>
    </div>
  );
};
