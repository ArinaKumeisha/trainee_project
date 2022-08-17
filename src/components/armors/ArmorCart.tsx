import React from 'react';
import { useCustomParams } from 'utilities/index';
import { useGetOneArmorQuery } from 'reduxEntities/api/gamesAPI';
import s from 'common/commonStyle/Common.module.css';

export const ArmorCart = () => {
  const id = useCustomParams();
  const { data } = useGetOneArmorQuery(id);

  const dmgNegation =
    data &&
    data.data.dmgNegation.map((el, index) => {
      return (
        <div key={el.name + index}>
          <div>{el.name}</div>
          <div>{el.amount}</div>
        </div>
      );
    });

  return (
    <>
      {data && (
        <div className={s.detailedItem}>
          <img src={data.data.image} alt={'armor'} className={s.imageItem} />
          <div className={s.description}>
            <h1>name: {data.data.name}</h1>
            {dmgNegation}
          </div>
        </div>
      )}
    </>
  );
};
