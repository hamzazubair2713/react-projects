import React, { useEffect, useState } from "react";
import Ripple from "../rippleButton/Ripple";
import { TodoProvider } from "./context";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [value, setValue] = useState("");
  const [checkUpdate, setCheckUpdate] = useState(false);
  const [index, setIndex] = useState(null);
  function handelSubmit(e) {
    e.preventDefault();
    if (index === null) {
      if (!value) return;
      setTodo((prevTodo) => [{ id: Date.now(), value }, ...prevTodo]);
      setValue("");
    } else {
      setTodo((prevTodo) =>
        prevTodo.map((elem) =>
          elem.id === index ? { ...elem, value: value } : elem
        )
      );
      setCheckUpdate(false);
      setValue("");
      setIndex(null);
    }
  }
  function handelDelete(id) {
    const filterData = todo.filter((elem) => elem.id !== id);
    setTodo(filterData);
  }
  useEffect(() => {
    const todo = JSON.parse(localStorage.getItem("todos"));
    if (todo && todo.length > 0) {
      setTodo(todo);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  return (
    <>
      <form onSubmit={handelSubmit}>
        <h2>Add Todos</h2>
        <input
          type="text"
          placeholder="Add Todos"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Ripple>{!checkUpdate ? "Add" : "Save"}</Ripple>
      </form>
      <div className="todos-wrapper">
        {todo?.map((elem) => (
          <div>
            <h3 key={elem.id}>{elem.value}</h3>
            <h3
              className="cursor"
              onClick={() => {
                setValue(elem.value);
                setCheckUpdate(true);
                setIndex(elem.id);
              }}
            >
              Edit
            </h3>
            <h3 className="cursor" onClick={() => handelDelete(elem.id)}>
              Delete
            </h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default Todo;
