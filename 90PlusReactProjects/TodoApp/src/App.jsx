import { useEffect, useState } from "react";
import todos from "./data/todos";

const EditModal = ({ todo, isOpen, onClose, onUpdate }) => {
  const [updatedTitle, setUpdatedTitle] = useState(todo?.title || "");
  console.log(todo);
  

  if(!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    onUpdate(todo?.id, updatedTitle)
    onClose()
  }

  return (
    // <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-30 z-50 backdrop-blur-md">
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div className="min-w-96 bg-white shadow-lg p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Update Todo</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
            className="p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
            type="text"
            placeholder="Edit todo"
          />
          <div className="flex justify-end gap-3">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Save
            </button>
            <button
              onClick={onClose}
              type="button"
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


function App() {
  const [myTodos, setMyTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null)

  useEffect(() => {
    setMyTodos(todos);
  }, [])

  
  const addTodo = () => {
    const todo = {
      id: myTodos.length + 1,
      title: newTodo,
      completed: false
    }
    
    if(!newTodo.trim()) return

    setMyTodos([...myTodos, todo]);
    setNewTodo("");
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleOpenModal = (todo) => {
    
    setSelectedTodo(todo)
    setIsModalOpen(true)
  }

  const handleUpdate = (todo, updatedTitle) => {
    // console.log(todo, updatedTitle);
  }


  return (
    <>
      <main className="grid place-items-center min-h-screen bg-gray-100">
        <div className="min-w-96 bg-white shadow-lg p-6 rounded-lg">
          <div className="flex items-center gap-x-2">
          <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} type="text" className="w-full p-2 border border-gray-400"/> <button onClick={addTodo} className="cursor-pointer px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition">Add</button>
          </div>
          <div>
            <h2 className="text-2xl font-bold">My Todos</h2>
            <ul>
              {myTodos.map((todo, index) => (
                <li key={index} className="p-2">
                  <div className="flex items-center gap-x-2">
                  {todo.id}. {todo.title} <span>{todo.completed ? "Done" : "Not Done"}</span>
                  
                  <button className="cursor-pointer px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition">Delete</button>
                  <button onClick={() => handleOpenModal(todo)} className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">Edit</button>
                  <input type="checkbox" name="" id="" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {<EditModal todo={selectedTodo} isOpen={isModalOpen} onClose={handleCloseModal} onUpdate={handleUpdate}/>}
      </main>
    </>
  )
}

export default App
