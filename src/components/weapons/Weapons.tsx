import React from 'react';
import { useContext } from 'react';
import { useGetWeaponsQuery } from 'reduxEntities/api/gamesAPI';
import { ItemsContext } from 'utilities/index';
import { enteredSearch } from 'utilities/index';
import { countItems } from 'utilities/index';
import { SearchName } from 'components/searchName/index';
import s from 'common/commonStyle/Common.module.css';
import { WEAPONS_URL } from 'utilities/universalFunction/variables';
import { Weapon } from 'components/weapons';

export const Weapons = () => {
  const { page, name } = useContext(ItemsContext);
  const { data: items } = useGetWeaponsQuery({
    name: name,
    page: +page,
    limit: 10,
  });

  const searchValues = items && enteredSearch(items.data, name);
  return (
    <div>
      <SearchName endpoint={WEAPONS_URL} />
      <h1>{items && countItems(items)}</h1>
      <div className={s.mainContainer}>
        {searchValues &&
          searchValues.map(element => {
            return <Weapon key={element.id} shortCart={element} />;
          })}
      </div>
    </div>
  );
};
