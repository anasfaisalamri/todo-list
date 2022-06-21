import React from "react";
import { CgCheckR, CgCloseR } from "react-icons/cg";
import { FiEdit } from "react-icons/fi";

function TodoList(props) {
  return (
    <div className="todo-list">
      {props.todos.map((todo, index) => (
        <div
          className={todo.isComplete ? "todo-row complete" : "todo-row"}
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
              onClick={() => setEdit({ id: todo.id, value: todo.text })}
              className="edit-icon"
            />
            <CgCloseR
              onClick={() => props.removeTodo(todo.id)}
              className="delete-icon"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
