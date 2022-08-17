import React from 'react';
import { useContext } from 'react';
import { useGetCreaturesQuery } from 'reduxEntities/api/gamesAPI';
import { ItemsContext } from 'utilities/index';
import { enteredSearch } from 'utilities/index';
import { countItems } from 'utilities/index';
import { SearchName } from 'components/searchName/index';
import s from 'common/commonStyle/Common.module.css';
import { CREATURES_URL } from 'utilities/universalFunction/variables';
import { Creature } from 'components/creatures/Creature';

export const Creatures = () => {
  const { page, name } = useContext(ItemsContext);
  const { data: items } = useGetCreaturesQuery({
    name: name,
    page: +page,
    limit: 10,
  });

  const searchValues = items && enteredSearch(items.data, name);
  return (
    <div>
      <SearchName endpoint={CREATURES_URL} />
      <h1>{items && countItems(items)}</h1>
      <div className={s.mainContainer}>
        {searchValues &&
          searchValues.map(element => {
            return <Creature key={element.id} shortCart={element} />;
          })}
      </div>
    </div>
  );
};
