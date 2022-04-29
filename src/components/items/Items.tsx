import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { countItems, enteredSearch, ITEMS_URL } from 'utilities';
import { Item } from 'components/items';
import { useGetItemsQuery } from 'reduxEntities';
import { SearchName } from 'components/searchName';
import s from 'common/commonStyle/Common.module.css';

export const Items = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const postQuery = searchParams.get('name') || '';
  const { data: items } = useGetItemsQuery(postQuery);
  const endpoint = ITEMS_URL;
  const searchValues = items && enteredSearch(items.data, postQuery);
  return (
    <div>
      <SearchName setSearchParams={setSearchParams} endpoint={endpoint} />
      <h1>{items && countItems(items)}</h1>
      <div className={s.mainContainer}>
        {searchValues &&
          searchValues.map(element => {
            return <Item key={element.id} shortCart={element} />;
          })}
      </div>
    </div>
  );
};
