import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { TodosProvider } from "./context/TodosContext";

export const Main = () => {
  return (
    <Router>
      <TodosProvider>
        <App />
      </TodosProvider>
    </Router>
  );
};
