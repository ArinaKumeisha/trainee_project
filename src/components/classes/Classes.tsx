import React from 'react';
import { useContext } from 'react';
import { useGetClassesQuery } from 'reduxEntities/api/gamesAPI';
import { ItemsContext } from 'utilities/index';
import { enteredSearch } from 'utilities/index';
import { countItems } from 'utilities/index';
import { SearchName } from 'components/searchName/index';
import s from 'common/commonStyle/Common.module.css';
import { CLASSES_URL } from 'utilities/universalFunction/variables';
import { Class } from 'components/classes/Class';

export const Classes = () => {
  const { page, name } = useContext(ItemsContext);
  const { data: items } = useGetClassesQuery({
    name: name,
    page: +page,
    limit: 10,
  });

  const searchValues = items && enteredSearch(items.data, name);
  return (
    <div>
      <SearchName endpoint={CLASSES_URL} />
      <h1>{items && countItems(items)}</h1>
      <div className={s.mainContainer}>
        {searchValues &&
          searchValues.map(element => {
            return <Class key={element.id} shortCart={element} />;
          })}
      </div>
    </div>
  );
};
