import React, { useState } from "react";

function TodoForm() {
  const [inputTodo, setInputTodo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

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
        value={inputTodo}
        onChange={handleChange}
      />
      <button>Create</button>
    </form>
  );
}

export default TodoForm;
