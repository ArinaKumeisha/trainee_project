import React from 'react';
import { useContext } from 'react';
import { ItemsContext } from 'utilities/index';
import { enteredSearch } from 'utilities/index';
import { countItems } from 'utilities/index';
import { useGetAshesQuery } from 'reduxEntities/api/gamesAPI';
import { SearchName } from 'components/searchName/index';
import { ASHES_URL } from 'utilities/universalFunction/variables';
import s from 'common/commonStyle/Common.module.css';
import { Ashe } from 'components/ashes/Ashe';

export const Ashes = () => {
  const { page, name } = useContext(ItemsContext);
  const { data: items } = useGetAshesQuery({
    name: name,
    page: +page,
    limit: 10,
  });

  const searchValues = items && enteredSearch(items.data, name);
  return (
    <div>
      <SearchName endpoint={ASHES_URL} />
      <h1>{items && countItems(items)}</h1>
      <div className={s.mainContainer}>
        {searchValues &&
          searchValues.map(element => {
            return <Ashe key={element.id} shortCart={element} />;
          })}
      </div>
    </div>
  );
};
