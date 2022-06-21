import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Todo() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const editTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) =>
        prevTodo.id === todoId ? newValue : prevTodo
      )
    );
  };

  const deleteTodo = (id) => {
    const delTodo = [...todos].filter((todo) => todo.id !== id);
    setTodos(delTodo);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.complete = !todo.complete;
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onSubmit={addTodo} />
      <TodoList
        todos={todos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </div>
  );
}

export default Todo;
