import React, { useState, useEffect } from "react";
import "./App.css";

// Components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  /**
   * States
   */
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  /**
   * Once app starts
   */

  useEffect(() => {
    getLocalTodos();
  }, []);

  /**
   * Effects
   *
   * cada vez que TODOS(o todo lo que este dentro del array) cambia, se ejecuta este callback
   */
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, filter]);

  
  /**
   * Functions
   */
  const filterHandler = () => {
    switch (filter) {
      case "completed":
        setFilteredTodos(todos.filter((indv) => indv.completed));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((indv) => !indv.completed));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos")===null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      setTodos(JSON.parse(localStorage.getItem("todos")))
    }
  };

  const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
  };

  return (
    <div className="App">
      <header>
        <h1>Miguel's Todo List</h1>
      </header>
      <Form
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setFilter={setFilter}
      />

      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
