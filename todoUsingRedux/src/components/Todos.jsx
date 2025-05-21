import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todoSlices';

function Todos() {
  const todos = useSelector((state) => state.todos) || [];
  const dispatch = useDispatch();

  return (
    <div className="bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-100 py-10 px-4 min-h-[60vh]">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-lg border border-blue-200">
        <h2 className="text-2xl font-semibold text-blue-700 mb-5 text-center">Your Todos</h2>
        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-blue-50 border border-blue-200 px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <span className="text-slate-800">{todo.text}</span>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-red-500 hover:text-red-600 font-bold text-xl"
                title="Delete"
              >
                ✖
              </button>
            </li>
          ))}
        </ul>
        {todos.length === 0 && (
          <p className="text-center text-slate-500 mt-6 italic">You don’t have any todos yet.</p>
        )}
      </div>
    </div>
  );
}
export default Todos;
