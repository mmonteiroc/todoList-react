import React from "react";

const Form = ({setInputText, setTodos, todos, inputText, setFilter}) => {
  /**
   * JS Functions and code
   */
  const inputHandler = (e) => {
    setInputText(e.target.value)
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([
        ...todos,
        {
            text: inputText,
            completed: false,
            id: Math.random()*1000
        }
    ]);
    /**
     * Set the input clear
     */
    setInputText("")
  }

  const filterHandler = (e) => {
    setFilter(e.target.value)
  }
  
  return (
    <form>
      <input type="text" className="todo-input" onChange={inputHandler} value={inputText}/>
      <button className="todo-button" type="submit" onClick={submitHandler}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={filterHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
