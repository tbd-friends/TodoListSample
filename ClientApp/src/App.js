import React from "react";
import { Route } from "react-router-dom";
import { TodosListPage } from "./pages/TodosListPage";
import { TodoListPage } from "./pages/TodoListPage";

function App() {
  return (
    <>
      <Route path="/" exact component={TodosListPage} />
      <Route path="/todo/:id" component={TodoListPage} />
    </>
  );
}

export default App;
