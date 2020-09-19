import React from "react";

const Todo = ({ todo, setTodos, todos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((indv) => indv.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((indv) => {
        if (indv.id === todo.id) {
          return {
            ...indv,
            completed: !indv.completed,
          };
        }
        return indv;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? 'completed':''}`}>{todo.text}</li>
      <button className="complete-btn" onClick={completeHandler}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};
export default Todo;
