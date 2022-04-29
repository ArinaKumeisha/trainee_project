import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { AMMOS_URL, countItems, enteredSearch } from 'utilities';
import { Ammo } from 'components/ammos';
import { useGetAmmosQuery } from 'reduxEntities';
import { SearchName } from 'components/searchName';
import s from 'common/commonStyle/Common.module.css';

export const Ammos = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const postQuery = searchParams.get('name') || '';
  const { data: items } = useGetAmmosQuery(postQuery);
  const endpoint = AMMOS_URL;
  const searchValues = items && enteredSearch(items.data, postQuery);

  return (
    <div>
      <SearchName setSearchParams={setSearchParams} endpoint={endpoint} />
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
