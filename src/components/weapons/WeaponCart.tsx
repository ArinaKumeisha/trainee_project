import React from 'react';
import { useCustomParams } from 'utilities';
import { useGetOneWeaponQuery } from 'reduxEntities';
import s from 'common/commonStyle/Common.module.css';

export const WeaponCart = () => {
  const id = useCustomParams();
  const { data } = useGetOneWeaponQuery(id);

  return (
    <>
      {data && (
        <div className={s.detailedItem}>
          <img src={data.data.image} alt={'weapon'} className={s.imageItem} />
          <div className={s.description}>
            <h1>name: {data.data.name}</h1>
            <div>{data.data.description}</div>
          </div>
        </div>
      )}
    </>
  );
};
