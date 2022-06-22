import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Todo() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todoStorage");

    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  useEffect(() => {
    const json = JSON.stringify(todos);
    localStorage.setItem("todoStorage", json);
  }, [todos]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const editTodo = (todoId, newTodo) => {
    if (!newTodo.text || /^\s*$/.test(newTodo.text)) {
      return;
    }

    let updatedTodos = todos.map((todo) =>
      todoId === todo.id ? newTodo : todo
    );

    setTodos(updatedTodos);
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
    <div className="todo-app">
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
