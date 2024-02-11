import React, { ReactElement } from "react";
import LineItem from "./LineItem";
import { ItemsArray } from "./App";

type PropsType = {
  items: ItemsArray;
  handleCheck: (id: number) => void;
  handleDelete: (id: number) => void;
};

const ItemList = ({
  items,
  handleCheck,
  handleDelete,
}: PropsType): ReactElement => {
  return (
    <ul>
      {items.map((item) => (
        <LineItem
          key={item.id}
          item={item}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ItemList;
