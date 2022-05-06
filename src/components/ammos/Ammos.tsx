import React, { useContext } from 'react';
import { AMMOS_URL, countItems, enteredSearch, ItemsContext } from 'utilities';
import { Ammo } from 'components/ammos';
import { useGetAmmosQuery } from 'reduxEntities';
import { SearchName } from 'components/searchName';
import s from 'common/commonStyle/Common.module.css';

export const Ammos = () => {
  const { page, name } = useContext(ItemsContext);
  const { data: items } = useGetAmmosQuery({
    name: name,
    page: +page,
    limit: 10,
  });
  console.log(items?.data);
  const searchValues = items && enteredSearch(items.data, name);
  return (
    <div>
      <SearchName endpoint={AMMOS_URL} />
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
