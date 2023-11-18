import { createContext, useContext, useState } from "react";

export const TodoContext = createContext({
  todo: [],
  handelDelete: (id) => {},
  handelSubmit: (todo, id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
