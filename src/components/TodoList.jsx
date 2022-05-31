import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, setTodos, filteredTodos}) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
      {/* for each to do that we have from the state we're gonna render out a todo component */}
        {filteredTodos.map(todo => (
                <Todo 
                key={todo.id}
                text={todo.text}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
                />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
