import React from "react";
import style from "./Items.module.css";
import {itemsAPI} from "../../redux/gamesAPI";
import Item, {ItemsType} from "./item/Item";

export type DataType = {
  success: true;
  count: number;
  total: number;
  data: ItemsType[];
};

const Items = () => {
  const {data: items} = itemsAPI.useGetItemsQuery(5);
  return (
    <div className={style.container}>
      {items &&
        items.data.map((element) => {
          return (
            <Item
              key={element.id}
              name={element.name}
              image={element.image}
              type={element.type}
              description={element.description}
              effect={element.effect}
              id={element.id}
            />
          );
        })}
    </div>
  );
};

export default Items;
