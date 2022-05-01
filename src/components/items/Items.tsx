import React, { useContext } from 'react';
import { countItems, enteredSearch, ITEMS_URL, ItemsContext } from 'utilities';
import { Item } from 'components/items';
import { useGetItemsQuery } from 'reduxEntities';
import { SearchName } from 'components/searchName';
import s from 'common/commonStyle/Common.module.css';

export const Items = () => {
  const { postQuery } = useContext(ItemsContext);
  const { data: items } = useGetItemsQuery(postQuery);

  const searchValues = items && enteredSearch(items.data, postQuery);

  return (
    <div>
      <SearchName endpoint={ITEMS_URL} />
      <h1>{items && countItems(items)}</h1>
      <div className={s.mainContainer}>
        {searchValues &&
          searchValues.map(element => {
            return <Item key={element.id} shortCart={element} />;
          })}
      </div>
    </div>
  );
};
