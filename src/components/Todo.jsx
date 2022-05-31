import React from 'react';

const Todo = ({text, todo, todos, setTodos}) => {

  // add events
  const deleteHandler = (e) => {

    // get all current todos, filter the state out, find an element that matches the element clicked, if it matches the one from the state, delete it
    setTodos(todos.filter((el) => el.id !== todo.id));
    console.log(todo);
  };
  return (
    <div className="todo">
      <li className='todo-item'>{text}</li>
    <button className='complete-btn'><i className='fas fa-check'></i></button>
    <button onClick={deleteHandler} className='delete-btn'><i className='fas fa-trash'></i></button>
    </div>
  );
}

export default Todo;