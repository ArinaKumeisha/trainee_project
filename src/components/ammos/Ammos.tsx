import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { countItems, enteredSearch } from 'utilities';
import { Ammo } from 'components/ammos';
import { useGetAmmosQuery } from 'reduxLayer';
import { SearchName } from 'components/searchName';
import s from 'common/commonStyle/Common.module.css';

export const Ammos = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const postQuery = searchParams.get('name') || '';
  const { data: items } = useGetAmmosQuery(postQuery);
  const searchValues = items && enteredSearch(items.data, postQuery);

  return (
    <div>
      <SearchName setSearchParams={setSearchParams} />
      <h1>{items && countItems(items)}</h1>
      <div className={s.mainContainer}>
        {searchValues &&
          searchValues.map(element => {
            return <Ammo key={element.id} shortCart={element} />;
          })}
      </div>
    </div>
  );
};
