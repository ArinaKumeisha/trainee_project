import React from 'react';
import { useGetOneArmorQuery } from 'BLL/redux';
import { useCustomParams } from 'logic';
import s from 'common/commonStyle/Common.module.css';

export const ArmorCart = () => {
  const id = useCustomParams();
  const { data } = useGetOneArmorQuery(id);

  const negationItems = data?.data.dmgNegation.map((el, index) => {
    return (
      <div key={el.name + index}>
        <h2>name: {el.name}</h2>
        <b>amount:{el.amount}</b>
        <b>type:{data.data.type}</b>
      </div>
    );
  });

  return (
    <div className={s.blockCart}>
      {data ? (
        <div className={s.detailedItem}>
          <img src={data.data.image} alt={'armo'} className={s.imageItem} />
          <div className={s.description}>
            <h1>name: {data.data.name}</h1>
            <div className={s.text}>
              <h2>description</h2>: {data.data.description}
            </div>
            <div>category: {data.data.category}</div>
            {negationItems}
          </div>
        </div>
      ) : (
        []
      )}
    </div>
  );
};
