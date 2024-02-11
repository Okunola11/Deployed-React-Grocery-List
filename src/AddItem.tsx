import React, { ReactElement, FormEvent, LegacyRef } from "react";
import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

type PropsType = {
  newItem: string;
  setNewItem: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

const AddItem = ({
  newItem,
  setNewItem,
  handleSubmit,
}: PropsType): ReactElement => {
  const inputRef: LegacyRef<HTMLInputElement> = useRef<HTMLInputElement>(null);

  return (
    <form className="addForm" onSubmit={handleSubmit} action="">
      <label htmlFor="addItem">Add Item</label>
      <input
        type="text"
        id="addItem"
        placeholder="Add Item"
        autoFocus
        ref={inputRef}
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button
        type="submit"
        aria-label="Add Item"
        onClick={() => (inputRef.current ? inputRef.current.focus() : null)}
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
