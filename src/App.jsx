import React, { useState, useEffect } from 'react';
import Navbar from './componenets/Navbar';
import Footer from './componenets/Footer';

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [newTodo, setNewTodo] = useState('');
  const [editing, setEditing] = useState(null);
  const [editingText, setEditingText] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim()) { //Khaali hai kya?
      setTodos([...todos, { text: newTodo, isCompleted: false }]);
      setNewTodo('');
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const completeTodo = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(updatedTodos);
  };

  const editTodo = (index) => {
    setEditing(index);
    setEditingText(todos[index].text);
  };

  const saveTodo = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, text: editingText } : todo
    );
    setTodos(updatedTodos);
    setEditing(null);
    setEditingText('');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8">
        <div className="container mx-auto max-w-xl p-6 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">To-Do List</h1>

          <div className="flex justify-center mb-4">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              className="border border-gray-300 rounded-lg p-3 w-full text-gray-700"
              placeholder="Add a new task"
            />
            <button
              onClick={addTodo}
              className="bg-blue-600 text-white p-3 ml-4 rounded-lg shadow hover:bg-blue-700"
            >
              Add
            </button>
          </div>

          <ul className="list-none p-0">
            {todos.map((todo, index) => (
              <li
                key={index}
                className={`flex justify-between items-center p-4 mb-3 rounded-lg shadow ${
                  todo.isCompleted ? 'bg-green-100' : 'bg-gray-100'
                }`}
              >
                {editing === index ? (
                  <input
                    type="text"
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                    className="border border-gray-300 p-2 rounded-lg flex-grow mr-2 text-gray-700"
                  />
                ) : (
                  <span
                    className={`flex-grow text-gray-800 ${
                      todo.isCompleted ? 'line-through' : ''
                    }`}
                    style={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                    title={todo.text}
                  >
                    {todo.text}
                  </span>
                )}

                <div className="flex items-center">
                  {editing === index ? (
                    <button
                      onClick={() => saveTodo(index)}
                      className="bg-green-600 text-white p-2 ml-2 rounded-lg shadow hover:bg-green-700"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => editTodo(index)}
                      className="bg-yellow-500 text-white p-2 ml-2 rounded-lg shadow hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                  )}

                  <button
                    onClick={() => completeTodo(index)}
                    className="bg-green-600 text-white p-2 ml-2 rounded-lg shadow hover:bg-green-700"
                  >
                    {todo.isCompleted ? 'Undo' : 'Complete'}
                  </button>

                  <button
                    onClick={() => deleteTodo(index)}
                    className="bg-red-600 text-white p-2 ml-2 rounded-lg shadow hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
