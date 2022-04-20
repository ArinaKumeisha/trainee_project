import React from 'react';
import { useGetOneAmmoQuery } from 'BLL/redux';
import { useCustomParams } from 'logic';
import s from 'common/commonStyle/Common.module.css';

export const AmmoCart = () => {
  const id = useCustomParams();
  const { data } = useGetOneAmmoQuery(id);

  const attackPowers =
    data &&
    data.data.attackPower.map((el, index) => {
      return (
        <div key={el.name + index}>
          <span>{el.name}</span>
          <span>{el.amount}</span>
          <div>type:{data.data.type}</div>
        </div>
      );
    });

  return (
    <div className={s.blockCart}>
      {data ? (
        <div className={s.detailedItem}>
          <img src={data.data.image} alt={'ammo'} className={s.imageItem} />
          <div className={s.description}>
            <h1>name: {data.data.name}</h1>
            <p>description: {data.data.description}</p>
            {attackPowers}
          </div>
        </div>
      ) : (
        []
      )}
    </div>
  );
};
