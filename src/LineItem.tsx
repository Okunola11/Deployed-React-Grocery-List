import React, { ReactElement } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Item } from "./App";

type PropsType = {
  item: Item;
  handleCheck: (id: number) => void;
  handleDelete: (id: number) => void;
};

const LineItem = ({
  item,
  handleCheck,
  handleDelete,
}: PropsType): ReactElement => {
  return (
    <li className="item">
      <input
        type="checkbox"
        onChange={() => handleCheck(item.id)}
        checked={item.checked}
      />
      <label
        style={item.checked ? { textDecoration: "line-through" } : undefined}
        onDoubleClick={() => handleCheck(item.id)}
      >
        {item.item}
      </label>
      <FaTrashAlt
        onClick={() => handleDelete(item.id)}
        role="button"
        tabIndex={Number(0)}
        aria-label={`Delete ${item.item}`}
      />
    </li>
  );
};

export default LineItem;
