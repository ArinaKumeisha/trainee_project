import React from "react";
import style from "./Item.module.css";
export type ItemsType = {
  id: string;
  name: string;
  image: string;
  description: string;
  type?: string;
  effect?: string;
};

const Item = ({ name, image, description, type, effect }: ItemsType) => {
  return (
    <div className={style.cartItem}>
      <h4>{name}</h4>
      <img src={image} />
      <p>{description}</p>
      <p>{type}</p>
    </div>
  );
};

export default Item;
