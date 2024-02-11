import React from "react";
import ItemList from "./ItemList";
import { ItemsArray } from "./App";

type PropsType = {
  items: ItemsArray;
  handleCheck: (id: number) => void;
  handleDelete: (id: number) => void;
};

const Contents = ({ items, handleCheck, handleDelete }: PropsType) => {
  return (
    <>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>Your List is Empty.</p>
      )}
    </>
  );
};

export default Contents;
