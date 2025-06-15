import React from 'react';

function TodoItem({ todo, index, onComplete, onDelete }) {
  return (
    <li className="todo-item">
      <span
        className={`todo-text ${todo.completed ? 'completed' : ''}`}
      >
        {todo.text}
      </span>

      {!todo.completed && (
        <button onClick={() => onComplete(index)} className="complete-btn">
          Complete
        </button>
      )}

      <button onClick={() => onDelete(index)} className="delete-btn">
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
