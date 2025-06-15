import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onComplete, onDelete }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
