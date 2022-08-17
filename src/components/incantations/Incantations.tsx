import React from 'react';
import { useContext } from 'react';
import { useGetIncantationsQuery } from 'reduxEntities/api/gamesAPI';
import { ItemsContext } from 'utilities/index';
import { enteredSearch } from 'utilities/index';
import { countItems } from 'utilities/index';
import { SearchName } from 'components/searchName/index';
import s from 'common/commonStyle/Common.module.css';
import { INCANTATIONS_URL } from 'utilities/universalFunction/variables';
import { Incantation } from 'components/incantations/Incantation';

export const Incantations = () => {
  const { page, name } = useContext(ItemsContext);
  const { data: items } = useGetIncantationsQuery({
    name: name,
    page: +page,
    limit: 10,
  });

  const searchValues = items && enteredSearch(items.data, name);
  return (
    <div>
      <SearchName endpoint={INCANTATIONS_URL} />
      <h1>{items && countItems(items)}</h1>
      <div className={s.mainContainer}>
        {searchValues &&
          searchValues.map(element => {
            return <Incantation key={element.id} shortCart={element} />;
          })}
      </div>
    </div>
  );
};
