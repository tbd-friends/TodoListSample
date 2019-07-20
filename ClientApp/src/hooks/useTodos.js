import React from "react";
import { TodosContext } from "../context/TodosContext";

export const useTodos = () => {
  const todosContext = React.useContext(TodosContext);

  return [todosContext];
};
