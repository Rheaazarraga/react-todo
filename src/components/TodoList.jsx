import React from 'react';
import Todo from './Todo';

const TodoList = ({todos}) => {
  console.log('here is a todo item', todos)
  return (
    <div className="todo-container">
      <ul className="todo-list">
      {/* for each to do that we have from the state we're gonna render out a todo component */}
        {todos.map(todo => (
                <Todo key={todo.id} text={todo.text}/>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
