import React, { useState } from "react";
import { Item } from "./Items";

export function PackingList({ item, onDeleteItem, onhandelUpdate, onClear }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = item;
  if (sortBy === "description") {
    sortedItems = item
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "packed") {
    sortedItems = item.slice().sort((a, b) => a.packed - b.packed);
  }
  return (
    <div className="list">
      <ul>
        {sortedItems?.map((elem) => (
          <Item
            item={elem}
            key={elem.id}
            onDeleteItem={onDeleteItem}
            onhandelUpdate={onhandelUpdate}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description"> Sort by Description</option>
          <option value="packed"> Sort by Packed status</option>
        </select>
        <button onClick={() => onClear()}>Clear list</button>
      </div>
    </div>
  );
}
