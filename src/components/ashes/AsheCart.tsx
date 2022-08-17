import React from 'react';
import s from 'common/commonStyle/Common.module.css';
import { useCustomParams } from 'utilities/index';
import { useGetOneAsheQuery } from 'reduxEntities/api/gamesAPI';

export const AsheCart = () => {
  const id = useCustomParams();
  const { data } = useGetOneAsheQuery(id);

  return (
    <>
      {data && (
        <div className={s.detailedItem}>
          <img src={data.data.image} alt={'armor'} className={s.imageItem} />
          <div className={s.description}>
            <h1>name: {data.data.name}</h1>
            <p>description: {data.data.description}</p>
          </div>
        </div>
      )}
    </>
  );
};
