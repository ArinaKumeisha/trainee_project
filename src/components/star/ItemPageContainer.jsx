import React, { useState } from 'react';
import { ItemPage } from 'src/components/star/ItemPage';

export const ItemPageContainer = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Anna', profession: 'singer' },
    { id: 2, name: 'Viktor', profession: 'programmer' },
    { id: 3, name: 'Irina', profession: 'chemist' },
  ]);

  const deleteItem = itemId => {
    setItems(items.filter(item => item.id !== itemId));
  };
  const addItem = () => {
    const oneItem = { id: 4, name: 'Katya', profession: 'cook' };
    setItems([...items, oneItem]);
  };

  return <ItemPage deleteItem={deleteItem} addItem={addItem} items={items} />;
};
