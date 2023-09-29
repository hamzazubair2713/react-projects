import React, { useState } from "react";
import "./travel.css";
import { Form } from "./Form";
import { PackingList } from "./PackingList";

function Logo() {
  return <h1>🌴 Far Away 💼</h1>;
}

function Stats({ item }) {
  const totalItems = item.length;
  const packedItems = item.filter((elem) => elem.packed).length;
  const progress = Math.round((packedItems / totalItems) * 100);
  return (
    <footer className="stats">
      <em>
        💼 You have {totalItems} item on your list, and you already packed{" "}
        {packedItems}({progress || 0}%)
      </em>
    </footer>
  );
}
const TravelList = () => {
  const [item, setItem] = useState([]);

  function handelItems(item) {
    setItem((items) => [item, ...items]);
  }
  function handelDelete(id) {
    const deleteItems = item.filter((elem) => elem.id !== id);
    setItem(deleteItems);
  }

  function handelUpdate(id) {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handelClear() {
    if (item.length > 0) {
      if (window.confirm("Are you Sure You want to Clear the list.."))
        setItem([]);
    }
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handelItems} />
      <PackingList
        item={item}
        onDeleteItem={handelDelete}
        onhandelUpdate={handelUpdate}
        onClear={handelClear}
      />
      <Stats item={item} />
    </div>
  );
};

export default TravelList;
