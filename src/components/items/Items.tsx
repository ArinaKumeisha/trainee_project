import React, { useContext } from 'react';
import { countItems, enteredSearch, ITEMS_URL, ItemsContext } from 'utilities';
import { Item } from 'components/items';
import { useGetItemsQuery } from 'reduxEntities';
import { SearchName } from 'components/searchName';
import s from 'common/commonStyle/Common.module.css';
import { Pagination } from 'components/pagination/Pagination';

export const Items = () => {
  const { page, name, limit } = useContext(ItemsContext);
  const { data: items } = useGetItemsQuery({
    name: name,
    page: +page,
    limit: +limit,
  });
  const searchValues = items && enteredSearch(items.data, name);
  return (
    <div>
      <SearchName endpoint={ITEMS_URL} />
      <h1>{items && countItems(items)}</h1>
      <Pagination cardPacksTotalCount={items!.total} />
      <div className={s.mainContainer}>
        {searchValues &&
          searchValues.map(element => {
            return <Item key={element.id} shortCart={element} />;
          })}
      </div>
    </div>
  );
};
