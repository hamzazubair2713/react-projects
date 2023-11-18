import React, { useState } from "react";
import Ripple from "../rippleButton/Ripple";
import { useTodo } from "./context";

const TodoForm = () => {
  const { handelSubmit } = useTodo();
  const [checkUpdate, setCheckUpdate] = useState(false);
  const [value, setValue] = useState("");
  function add(e) {
    e.preventDefault();
    if (!value) return;
    handelSubmit(value);
  }
  return (
    <form onSubmit={add}>
      <h2>Add Todos</h2>
      <input
        type="text"
        placeholder="Add Todos"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Ripple>Add</Ripple>
    </form>
  );
};

export default TodoForm;
