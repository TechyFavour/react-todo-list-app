import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, { text: input.trim(), completed: false }]);
      setInput('');
    }
  };

  const markComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = true;
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <h2>My To-Do List ✅</h2>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task"
      />
      <button
        onClick={addTodo}
        className="add-btn"
        disabled={input.trim() === ''}
      >
        Add
      </button>

      <TodoList
        todos={todos}
        onComplete={markComplete}
        onDelete={deleteTodo}
      />
    </div>
  );
}

export default App;
