import React from "react";
import { Header } from "../components/header/Header";
import { TodosList } from "../components/TodosList";
import { useTodos } from "../hooks/useTodos";

export const TodosListPage = () => {
  const [state] = useTodos();

  return (
    <div>
      <Header title="Todos" />
      <TodosList items={state.todoLists} />
    </div>
  );
};
