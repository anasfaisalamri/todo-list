import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Todo() {
  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default Todo;
