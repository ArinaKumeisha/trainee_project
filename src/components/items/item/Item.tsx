import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { ShortInfoForItem } from 'types';
import s from 'common/commonStyle/Common.module.css';
import { SuperButton } from 'common';
import { AiFillHeart } from 'react-icons/ai';
import { RiHeartAddLine } from 'react-icons/ri';
import {
  addFavorites,
  removeFavorites,
  useAppDispatch,
  useAppMainSelector,
} from 'reduxEntities';

type Props = {
  shortCart: ShortInfoForItem;
};
export const Item = ({ shortCart }: Props) => {
  const { id, name, image, description } = shortCart;
  const authorized = useAppMainSelector(state => state.userInfo.authorized);

  const userFavorites = useAppMainSelector(state => state.userInfo.user.favorites);
  const favoriteItem = userFavorites.find(el => el.name === name);
  const [includedItem, setIncludedItem] = useState(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const redirectionToCart = () => {
    return navigate(`/items/${id}`);
  };

  const deleteItem = (itemId: string) => {
    dispatch(removeFavorites(itemId));
    setIncludedItem(false);
  };

  const addItem = () => {
    if (!authorized) {
      navigate('/login');
    } else if (!favoriteItem) {
      dispatch(addFavorites({ id, name, description, image }));
      setIncludedItem(true);
    }
  };

  return (
    <div className={s.cartItem}>
      <h2>name: {name}</h2>
      <img src={image} alt={'items'} />
      <span>description:</span>
      <p>{description}</p>
      <div className={s.buttons}>
        <SuperButton onClick={redirectionToCart}>More information</SuperButton>
        {includedItem ? (
          <AiFillHeart onClick={() => deleteItem(id)} className={s.icon} />
        ) : (
          <RiHeartAddLine onClick={addItem} className={s.icon} />
        )}
      </div>
    </div>
  );
};
