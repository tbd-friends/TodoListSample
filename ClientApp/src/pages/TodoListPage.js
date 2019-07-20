import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { TodoList } from "../components/TodoList";
import { useTodo } from "../hooks/useTodo";

export const TodoListPage = props => {
  const { params } = props.match;
  const [todo] = useTodo(Number(params.id));
  const leftActions = <Link to="/">Back</Link>;

  console.log(todo);

  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Header leftActions={leftActions} title={todo.title} />
      <TodoList items={todo.todos} />
      <Footer totalCount={2} completedCount={1} />
    </div>
  );
};
