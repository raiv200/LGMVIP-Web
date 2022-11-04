import React from "react";
import "../App.css";

const Header = ({ currentTodo, addTodo, handleOnChange,handleKeyDown }) => {
  return (
    <header className="header">
      <h2 className="header__title">To-Do List</h2>
      <div className="container">
        <input
         
          type="text"
          id="todos"
          onKeyDown={handleKeyDown}
          onChange={handleOnChange}
          value={currentTodo}
        />
        <button className="btn" onClick={() => addTodo()}>
          Add Todo
        </button>
      </div>
    </header>
  );
};

export default Header;

//  <div className="todo__create">
//  <input
//  ref={props.inputRef}
//  id="todos"
//  name="todos"
//  type="text"
//  onKeyDown={(event) => {
//    if (event.key === "Enter") props.addTodo();
//  }}
//  onChange={(event) => {
//    props.setCurrentTodo(event.target.value);
//  }}
// />
// <button className="btn" onClick={props.addTodo()}>
//  Add Todo
// </button>
// </div>
