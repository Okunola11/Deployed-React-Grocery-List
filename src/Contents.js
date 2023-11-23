import React from "react";
import ItemList from "./ItemList";

const Contents = ({ items, handleCheck, handleDelete }) => {
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
