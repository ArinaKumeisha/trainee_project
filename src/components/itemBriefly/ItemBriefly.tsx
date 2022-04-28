import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { ShortInfoForItem } from 'types';
import { SuperButton } from 'common';
import { AiFillHeart } from 'react-icons/ai';
import s from 'common/commonStyle/Common.module.css';
import { RiHeartAddLine } from 'react-icons/ri';
import {
  addFavorites,
  deleteItem,
  useAppDispatch,
  useAppMainSelector,
} from 'reduxEntities';

type Props = {
  shortCart: ShortInfoForItem;
  redirectionToCart: () => void;
};

export const ItemBriefly = ({ shortCart, redirectionToCart }: Props) => {
  const { id, name, image, description } = shortCart;
  const authorized = useAppMainSelector(state => state.registration.authorized);

  const userFavorites = useAppMainSelector(state => state.registration.user.favorites);
  const favoriteItem = userFavorites.find(el => el.name === name);
  const [includedItem, setIncludedItem] = useState(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const addToFavorites = () => {
    if (!authorized) {
      navigate('/login');
    } else if (!favoriteItem) {
      dispatch(addFavorites({ id, name, description, image }));
      setIncludedItem(true);
    }
  };

  const removeItems = (itemId: string) => {
    dispatch(deleteItem(itemId));
    setIncludedItem(false);
  };

  return (
    <div className={s.cartItem}>
      <h2>name: {name}</h2>
      <img src={image} alt={'ammos'} />
      <span>description:</span>
      <p>{description}</p>
      <div className={s.buttons}>
        <SuperButton onClick={redirectionToCart}>More information</SuperButton>
        {includedItem ? (
          <AiFillHeart onClick={() => removeItems(id)} className={s.icon} />
        ) : (
          <RiHeartAddLine onClick={addToFavorites} className={s.icon} />
        )}
      </div>
    </div>
  );
};
