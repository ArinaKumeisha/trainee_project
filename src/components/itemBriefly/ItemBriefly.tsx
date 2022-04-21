import React from 'react';
import type { ShortInfoForItem } from 'types';
import s from 'common/commonStyle/Common.module.css';

type Props = {
  shortCart: ShortInfoForItem;
};

export const ItemBriefly = ({ shortCart }: Props) => {
  const { name, image, description, type } = shortCart;

  return (
    <div className={s.cartItem}>
      <h2>name: {name}</h2>
      <img src={image} alt={'ammos'} />
      <span>description:</span>
      <p>{description}</p>
      <h2>{type}</h2>
    </div>
  );
};
