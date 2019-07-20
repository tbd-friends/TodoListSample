import React from "react";
import { Link } from "react-router-dom";
import { TodosListItem } from "./TodosListItem";

export const TodosList = props => {
  const renderTodosList = todosList => {
    return todosList.map(todo => {
      return (
        <Link key={todo.id} to={`/todo/${todo.id}`}>
          <TodosListItem
            title={todo.title}
            initial={todo.initial}
            totalCount={todo.todos.length}
            completedCount={todo.todos.filter(e => e.completed).length}
          />
        </Link>
      );
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexGrow: 1,
        padding: "10px"
      }}
    >
      {renderTodosList(props.items)}
    </div>
  );
};
