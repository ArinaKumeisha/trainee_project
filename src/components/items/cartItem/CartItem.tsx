import React from 'react';
import { useParams } from 'react-router-dom';
import s from 'common/commonStyle/Common.module.css';
import { useGetOneItemQuery } from 'BLL/redux';

export const CartItem = () => {
  const { itemId } = useParams<{ itemId: string }>();
  const correctId = itemId ? itemId : '';
  const { data: item } = useGetOneItemQuery(correctId);
  return (
    <div className={s.blockCart}>
      {item ? (
        <div className={s.detailedItem}>
          <img src={item.data.image} alt={'item'} className={s.imageItem} />

          <div className={s.description}>
            <h1>name: {item.data.name}</h1>
            <div className={s.text}>
              <h2>description</h2>: {item.data.description}
            </div>
            <div>type:{item.data.type}</div>
            <div>effect:{item.data.effect}</div>
          </div>
        </div>
      ) : (
        []
      )}
    </div>
  );
};
