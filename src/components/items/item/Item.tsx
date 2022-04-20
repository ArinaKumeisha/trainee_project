import React from 'react';

import { ItemBriefly } from 'components/itemBriefly';
import { useNavigate } from 'react-router-dom';
import { DataItem } from 'types/types';

type Props = {
  shortCart: DataItem;
};
export const Item = ({ shortCart }: Props) => {
  const navigate = useNavigate();

  const getItem = () => {
    return navigate(`/items/${shortCart.id}`);
  };

  return (
    <div onClick={getItem}>
      <ItemBriefly shortCart={shortCart} />
    </div>
  );
};
