import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { countItems, enteredSearch } from 'utilities';
import { Armor } from 'components/armors';
import { useGetArmorsQuery } from 'reduxEntities';
import { SearchName } from 'components/searchName';
import s from 'common/commonStyle/Common.module.css';

export const Armors = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const postQuery = searchParams.get('name') || '';
  const { data: items } = useGetArmorsQuery(postQuery);
  const searchValues = items && enteredSearch(items.data, postQuery);

  return (
    <div>
      <SearchName setSearchParams={setSearchParams} />
      <h1>{items && countItems(items)}</h1>
      <div className={s.mainContainer}>
        {searchValues &&
          searchValues.map(element => {
            return <Armor key={element.id} shortCart={element} />;
          })}
      </div>
    </div>
  );
};
