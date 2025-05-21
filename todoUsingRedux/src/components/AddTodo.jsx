import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todoSlices';

function AddTodo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const add = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    dispatch(addTodo(input));
    setInput('');
  };

  return (
    <div className="bg-gradient-to-r from-blue-100 via-sky-100 to-cyan-100 py-10 px-4">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-lg border border-blue-200">
        <h2 className="text-2xl font-bold text-indigo-700 mb-4 text-center">Add a New Todo</h2>
        <form onSubmit={add} className="flex gap-4">
          <input
            type="text"
            placeholder="Write your task..."
            className="flex-1 px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="px-5 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTodo;
