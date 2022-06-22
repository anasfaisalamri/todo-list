import React from "react";
import { useState } from "react";
import { CgCheckR, CgCloseR } from "react-icons/cg";
import { FiEdit } from "react-icons/fi";
import TodoForm from "./TodoForm";

function TodoList(props) {
  const [editText, setEditText] = useState("");

  const submitEdits = (value) => {
    props.editTodo(editText.id, value);
    setEditText({
      id: null,
      value: "",
    });
  };

  if (editText.id) {
    return <TodoForm editTodo={editText} onSubmit={submitEdits} />;
  }

  return (
    <div className="todo-list">
      {props.todos.map((todo, index) => (
        <div
          className={todo.complete ? "todo-row complete" : "todo-row"}
          key={index}
        >
          <div key={todo.id}>
            <div>{todo.text}</div>
          </div>
          <div className="icons">
            <CgCheckR
              onClick={() => props.completeTodo(todo.id)}
              className="complete-icon"
            />
            <FiEdit
              onClick={() => setEditText({ id: todo.id, value: todo.text })}
              className="edit-icon"
            />
            <CgCloseR
              onClick={() => props.deleteTodo(todo.id)}
              className="delete-icon"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
