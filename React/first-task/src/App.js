import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (inputValue.trim() === '') return;
    setTodos([...todos, inputValue]);
    setInputValue('');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Todo List</h1>
      <input
        type="text"
        value={inputValue}
        onChange = {(e) => setInputValue(e.target.value)}
        placeholder="Введите задачу"
      />
      <button onClick={handleAddTodo}>Добавить</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
