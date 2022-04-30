import React from 'react';
import style from './MainPage.module.css';
import PropTypes from 'prop-types';

export const ItemPage = ({ deleteItem, addItem, items }) => {
  return (
    <div className={style.container}>
      {items.map(item => {
        return (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <h3>{item.profession}</h3>
            <button onClick={deleteItem}>Add</button>
            <button onClick={addItem}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

ItemPage.propTypes = {
  deleteItem: PropTypes.func.isRequired,
  addItem: PropTypes.func.isRequired,
  items: PropTypes.array,
};

ItemPage.defaultProps = {
  items: [],
};
