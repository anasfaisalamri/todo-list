import React, { useState } from "react";

function TodoForm(props) {
  const [inputTodo, setInputTodo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: inputTodo,
      complete: false,
    });

    setInputTodo("");
  };

  const handleChange = (event) => {
    setInputTodo(event.target.value);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Create Todo"
        value={inputTodo}
        onChange={handleChange}
      />
      <button className="todo-button">Create</button>
    </form>
  );
}

export default TodoForm;
