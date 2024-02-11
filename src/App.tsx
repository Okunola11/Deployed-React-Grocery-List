import React, { FormEvent } from "react";
import Header from "./Header";
import SearchItem from "./SearchItem";
import AddItem from "./AddItem";
import Contents from "./Contents";
import Footer from "./Footer";
import { useState, useEffect } from "react";

export type Item = {
  id: number;
  checked: boolean;
  item: string;
};

export type ItemsArray = Item[];

function App() {
  const storedItems = localStorage.getItem("groceries");
  const initializedItems: ItemsArray = storedItems
    ? JSON.parse(storedItems)
    : [];

  const [items, setItems] = useState<ItemsArray>(initializedItems);
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("groceries", JSON.stringify(items));
  }, [items]);

  const addItem = (item: string) => {
    const id: number = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem: Item = { id, checked: false, item };
    const listItems: ItemsArray = [...items, myNewItem];
    setItems(listItems);
  };

  const handleCheck = (id: number) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  const handleDelete = (id: number) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <main>
        <Contents
          items={items.filter((item) =>
            item.item.toLowerCase().includes(search.toLowerCase())
          )}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      </main>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
