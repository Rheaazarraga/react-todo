import React from 'react';

const Todo = ({text, todo, todos, setTodos}) => {

  // add events

  // delete an item from the list
  const deleteHandler = (e) => {

    // get all current todos, filter the state out, find an element that matches the element clicked, if it matches the one from the state, delete it
    setTodos(todos.filter((item) => item.id !== todo.id));
    console.log(todo);
  };

  // mark an item as completed
  const completeHandler = (e) => {
    // go over each item in the state
    setTodos(todos.map(item => {
      // check if the items id matches the todo id 
      if(item.id === todo.id) {
        return {
          // use spread to add all other properties and only modify the completed property
          ...item, completed: !item.completed
        }
      }
      // if it doesn't match, return whatever it was
      return item;
    })
    );
  }


  return (
    <div className="todo">
      <li className='todo-item'>{text}</li>
    <button onClick={completeHandler} className='complete-btn'><i className='fas fa-check'></i></button>
    <button onClick={deleteHandler} className='delete-btn'><i className='fas fa-trash'></i></button>
    </div>
  );
}

export default Todo;