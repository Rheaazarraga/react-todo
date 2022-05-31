import React from 'react';
import Todo from './Todo';

const TodoList = ({todos}) => {
  console.log('here is a todo item', todos)
  return (
    <div className="todo-container">
      <ul className="todo-list">
      <Todo />
      </ul>
    </div>
  );
};

export default TodoList;