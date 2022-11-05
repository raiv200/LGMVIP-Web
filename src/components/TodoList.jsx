import React from 'react'
import "../App.css";

const TodoList = (props) => {
  return (
    <div className="todo custom-scroll">
        {props.children}
    </div>
  )
}

export default TodoList