import React from 'react';
import './App.css';
import DatePicker from './DatePicker';
import Todo from './Todo';
import TodoList from './TodoList';


function App() {
  return (
    <>
      <div>
        <Todo />
        <TodoList />
      </div>
      <div>
        <DatePicker />
      </div>
    </>
  );
}

export default App;
