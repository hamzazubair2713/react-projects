import React from "react";
import { useTodo } from "./context";

const TodoList = () => {
  const { todo, handelDelete } = useTodo();
  return (
    <div className="todos-wrapper">
      {todo?.map((elem) => (
        <div>
          <h3 key={elem.id}>{elem.value}</h3>
          <h3
            className="cursor"
            onClick={() => {
              //   setValue(elem.value);
              //   setCheckUpdate(true);
              //   setIndex(elem.id);
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
  );
};

export default TodoList;
