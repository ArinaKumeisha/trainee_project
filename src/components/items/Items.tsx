import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { countItems, enteredSearch } from 'utilities';
import { Item } from 'components/items';
import { useGetItemsQuery } from 'reduxLayer';
import { SearchName } from 'components/searchName';
import s from 'common/commonStyle/Common.module.css';

export const Items = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const postQuery = searchParams.get('name') || '';
  const { data: items } = useGetItemsQuery(postQuery);
  const searchValues = items && enteredSearch(items.data, postQuery);

  return (
    <div>
      <SearchName setSearchParams={setSearchParams} />
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
