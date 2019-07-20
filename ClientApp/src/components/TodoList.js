import React from "react";
import { TodoListItem } from "./TodoListItem";
import { AddTodoListItemForm } from "./AddTodoListItemForm";

export const TodoList = props => {
  const renderTodoItems = todoItems => {
    return todoItems.map(todo => {
      return (
        <TodoListItem
          key={todo.id}
          text={todo.text}
          completed={todo.completed}
        />
      );
    });
  };

  return (
    <div style={{ flexGrow: 1 }}>
      {renderTodoItems(props.items)}
      <AddTodoListItemForm />
    </div>
  );
};
