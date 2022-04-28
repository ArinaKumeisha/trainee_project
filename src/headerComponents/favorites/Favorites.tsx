import React from 'react';
import { deleteItem, useAppDispatch, useAppMainSelector } from 'reduxEntities';
import { Favorite } from 'reduxEntities/userInfo/userInfo';
import { AiOutlineDelete } from 'react-icons/ai';
import style from './Favorites.module.css';

export const Favorites = () => {
  const userName = useAppMainSelector(state => state.registration.user.name);
  const userFavorites = JSON.parse(localStorage.getItem(userName)!).favorites;
  const dispatch = useAppDispatch();

  const deleteItemHandler = (itemId: string) => {
    dispatch(deleteItem(itemId));
  };

  return (
    <div className={style.container}>
      {userFavorites.length > 0 ? (
        userFavorites.map((el: Favorite) => {
          return (
            <div className={style.item} key={el.id}>
              <h1>{el.name}</h1>
              <img src={el.image} alt="img" />
              <div>{el.description}</div>
              <AiOutlineDelete
                onClick={() => deleteItemHandler(el.id)}
                className={style.icon}
              />
            </div>
          );
        })
      ) : (
        <h1>There's nothing here</h1>
      )}
    </div>
  );
};
