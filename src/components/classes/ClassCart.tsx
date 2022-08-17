import React from 'react';
import { useCustomParams } from 'utilities/index';
import { useGetOneClassQuery } from 'reduxEntities/api/gamesAPI';
import s from 'common/commonStyle/Common.module.css';

export const ClassCart = () => {
  const id = useCustomParams();
  const { data } = useGetOneClassQuery(id);

  return (
    <>
      {data && (
        <div className={s.detailedItem}>
          <img src={data.data.image} alt={'armor'} className={s.imageItem} />
          <div className={s.description}>
            <h1>name: {data.data.name}</h1>
            <div>{data.data.description}</div>
            <div>
              <div>
                <span>level: </span>
                <span>{data.data.stats.level}</span>
              </div>
              <div>
                <span>vigor: </span>
                <span>{data.data.stats.vigor}</span>
              </div>
              <div>
                <span>endurance: </span>
                <span>{data.data.stats.endurance}</span>
              </div>
              <div>
                <span>strength: </span>
                <span>{data.data.stats.strength}</span>
              </div>
              <div>
                <span>dexterity: </span>
                <span>{data.data.stats.dexterity}</span>
              </div>
              <div>
                <span>inteligence: </span>
                <span>{data.data.stats.inteligence}</span>
              </div>
              <div>
                <span>faith: </span>
                <span>{data.data.stats.faith}</span>
              </div>
              <div>
                <span>arcane: </span>
                <span>{data.data.stats.arcane}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
