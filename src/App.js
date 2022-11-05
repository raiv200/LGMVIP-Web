import React, { useState } from "react";
import TodoItem from "./components/TodoItem";
import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [currentTodo, setCurrentTodo] = useState("");

  const handleOnChange = (e) => {
    setCurrentTodo(e.target.value);
  };

  const addTodo = () => {

    if(currentTodo === null || currentTodo.trim() === ""){
      alert("Please enter a todo title !!");
      return;
    }
    setTodoList([...todoList, { title: currentTodo, completed: false }]);
    setCurrentTodo("");
  };

  const deleteTodo = (todoToDelete) => {
    setTodoList(
      todoList.filter((todo) => {
        return todo.title !== todoToDelete;
      })
    );
  };

  const completeTodo = (todoToComplete) => {
    setTodoList(
      todoList.map((todo) => {
        return todo.title === todoToComplete
          ? { title: todoToComplete, completed: true }
          : { title: todo.title, completed: todo.completed ? true : false };
      })
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <div className="app">
      <Header
        currentTodo={currentTodo}
        addTodo={addTodo}
        handleOnChange={handleOnChange}
        handleKeyDown={handleKeyDown}
      />

      <TodoList>
        {todoList.map((todo, index) => (
          <TodoItem
            key={index}
            title={todo.title}
            completed={todo.completed}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
            index={index}
          />
        ))}
      </TodoList>
    </div>
  );
}

export default App;
