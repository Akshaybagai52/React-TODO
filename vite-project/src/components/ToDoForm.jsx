import React from 'react'

const ToDoForm = () => {
  return (
    <div className="p-4 bg-gray-200 rounded">
      <h2 className="text-lg font-bold mb-4">Add Todo</h2>
      <form className="flex items-center gap-4">
        <label htmlFor="todoInput" className="font-semibold">Task:</label>
        <input type="text" id="todoInput" className="px-2 py-1 border border-gray-300 rounded" />
        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Add</button>
      </form>
    </div>
  )
}

export default ToDoForm