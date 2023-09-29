export function Item({ item, onDeleteItem, onhandelUpdate }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onhandelUpdate(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.option} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
