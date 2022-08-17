import React from 'react';
import { useCustomParams } from 'utilities/index';
import { useGetOneBossQuery } from 'reduxEntities/api/gamesAPI';
import s from 'common/commonStyle/Common.module.css';

export const BossCart = () => {
  const id = useCustomParams();
  const { data } = useGetOneBossQuery(id);

  return (
    <>
      {data && (
        <div className={s.detailedItem}>
          <img src={data.data.image} alt={'boss'} className={s.imageItem} />
          <div className={s.description}>
            <h1>name: {data.data.name}</h1>
            <div>{data.data.description}</div>
            <div>{data.data.location}</div>
          </div>
        </div>
      )}
    </>
  );
};
