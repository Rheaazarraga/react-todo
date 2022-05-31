import React from 'react';


const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      // use spread operator if todos already exist in the list, then pass them
      ...todos, 
      // if we have a new todo, add it
      {text: inputText, completed: false, id: Math.random() * 1000}
    ]);
    setInputText('');
  };

  // status handler for filtered dropdown menu in form
  const statusHandler = (e) => {
    setStatus(e.target.value);
    console.log(e.target.value);
  };

  return (
    <form>
      <input value={inputText}
      onChange={inputTextHandler}
      type="text"
      className="todo-input" />
      <button onClick={submitTodoHandler}className="todo-button" type="submit">
        <i className="fas fa-plus square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
    </form>

  );
};

export default Form;