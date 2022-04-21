import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ItemBriefly } from 'components/itemBriefly';
import type { ShortInfoForItem } from 'types';

type Props = {
  shortCart: ShortInfoForItem;
};
export const Item = ({ shortCart }: Props) => {
  const navigate = useNavigate();

  const redirectionToCart = () => {
    return navigate(`/items/${shortCart.id}`);
  };

  return (
    <div onClick={redirectionToCart} role="button" tabIndex={0}>
      <ItemBriefly shortCart={shortCart} />
    </div>
  );
};
