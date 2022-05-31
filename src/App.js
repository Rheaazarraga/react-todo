import React, { useState, useEffect } from 'react';
import './App.css';
import Form from "./components/Form";
import TodoList from './components/TodoList';

function App() {

  // states
  const [ inputText, setInputText ] = useState('');
  const [ todos, setTodos ] = useState([]);
  const [ status, setStatus ] = useState('all');
  const [ filteredTodos, setFilteredTodos ] = useState([]);


  // functions

  // run ONCE when the app starts
  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveToLocalTodos();
  }, [ todos, status ]);

  const filterHandler = () => {
    // if filtered todos are complete, mark them as complete
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      // if filtered todos are incomplete, mark them as incomplete
      case 'incomplete':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      // show all the todos
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  // save to local storage for basic persistence on the web app
  // adding to local storage by saving and pushing what we have to our state
  const saveToLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  // checking if there's anything in local storage or not
  // if not set an empty array
  const getLocalTodos = () => {
    if (window.localStorage.getItem('todos') === null) {
      window.localStorage.setItem('todos', JSON.stringify([]));
    } else {
      // if we do, get it and push it up to the state
      let todoLocal = JSON.parse(window.localStorage.getItem('todos'));
      console.log(todoLocal);
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Bita's ToDo List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
