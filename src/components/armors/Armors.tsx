import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { countItems, DebounceSearch, enteredSearch } from 'logic';
import { useGetArmorsQuery } from 'BLL/redux';
import { Armor } from 'components/armors';
import s from 'common/commonStyle/Common.module.css';

export const Armors = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const postQuery = searchParams.get('name') || '';
  const { data: items } = useGetArmorsQuery(postQuery);
  const searchValues = items && enteredSearch(items.data, postQuery);

  return (
    <div>
      <DebounceSearch setSearchParams={setSearchParams} />
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
