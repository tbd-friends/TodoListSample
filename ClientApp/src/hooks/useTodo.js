import React from "react";
import { TodosContext } from "../context/TodosContext";

export const useTodo = id => {
  const todosContext = React.useContext(TodosContext);

  return [todosContext.todoLists.find(e => e.id === id)];
};
