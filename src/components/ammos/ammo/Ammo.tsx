import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ItemBriefly } from 'components/itemBriefly';
import { DataItem } from 'types/types';

type Props = {
  shortCart: DataItem;
};
export const Ammo = ({ shortCart }: Props) => {
  const navigate = useNavigate();

  const getItem = () => {
    return navigate(`/ammos/${shortCart.id}`);
  };

  return (
    <div onClick={getItem}>
      <ItemBriefly shortCart={shortCart} />
    </div>
  );
};
