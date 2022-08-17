import React from 'react';
import { useContext } from 'react';
import { useGetArmorsQuery } from 'reduxEntities/api/gamesAPI';
import { ItemsContext } from 'utilities/index';
import { enteredSearch } from 'utilities/index';
import { countItems } from 'utilities/index';
import { SearchName } from 'components/searchName/index';
import s from 'common/commonStyle/Common.module.css';
import { Armor } from 'components/armors/Armor';
import { ARMORS_URL } from 'utilities/universalFunction/variables';

export const Armors = () => {
  const { page, name } = useContext(ItemsContext);
  const { data: items } = useGetArmorsQuery({
    name: name,
    page: +page,
    limit: 10,
  });

  const searchValues = items && enteredSearch(items.data, name);
  return (
    <div>
      <SearchName endpoint={ARMORS_URL} />
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
