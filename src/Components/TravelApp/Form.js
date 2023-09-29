import React, { useState } from "react";

export function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [option, setOption] = useState(1);

  function handelSubmit(e) {
    e.preventDefault();
    if (!description) {
      alert("please fill description");
      return;
    }
    const newItem = { description, option, packed: false, id: Date.now() };
    console.log(newItem);
    onAddItems(newItem);
    setDescription("");
    setOption(1);
  }

  return (
    <form className="add-form" onSubmit={handelSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={option}
        onChange={(e) => setOption(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((elem) => (
          <option value={elem} key={elem}>
            {elem}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>add</button>
    </form>
  );
}
