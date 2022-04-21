import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ItemBriefly } from 'components/itemBriefly';
import type { ShortInfoForItem } from 'types';

type Props = {
  shortCart: ShortInfoForItem;
};
export const Armor = ({ shortCart }: Props) => {
  const navigate = useNavigate();

  const redirectionToCart = () => {
    return navigate(`/armors/${shortCart.id}`);
  };

  return (
    <div onClick={redirectionToCart}>
      <ItemBriefly shortCart={shortCart} />
    </div>
  );
};
