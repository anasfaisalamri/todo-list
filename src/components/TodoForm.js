import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [todoInput, setTodoInput] = useState(
    props.editText ? props.editText.value : ""
  );

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: todoInput,
      complete: false,
    });

    setTodoInput("");
  };

  const handleChange = (event) => {
    setTodoInput(event.target.value);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.editText ? (
        <>
          <input
            type="text"
            name="text"
            className="todo-input edit"
            placeholder="Update Todo"
            value={todoInput}
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button edit">Update</button>
        </>
      ) : (
        <>
          <input
            type="text"
            className="todo-input"
            placeholder="Create Todo"
            value={todoInput}
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button">Create</button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
