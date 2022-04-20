import React from 'react';
import s from 'common/commonStyle/Common.module.css';
import { countItems, DebounceSearch } from 'logic';
import { useSearchParams } from 'react-router-dom';
import { useGetItemsQuery } from 'BLL/redux';
import { Item } from 'components/items';
import { enteredSearch } from 'logic';

export const Items = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const postQuery = searchParams.get('name') || '';
  const { data: items } = useGetItemsQuery(postQuery);
  const searchValues = items && enteredSearch(items.data, postQuery);

  return (
    <div>
      <DebounceSearch setSearchParams={setSearchParams} />
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
