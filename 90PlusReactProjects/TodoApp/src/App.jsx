import { useEffect, useState } from "react";
import todos from "./data/todos";
import { v4 as uuidv4 } from "uuid";

const EditModal = ({ todo, isOpen, onClose, onUpdate }) => {
  const [updatedTitle, setUpdatedTitle] = useState("");

  useEffect(() => {
    setUpdatedTitle(todo?.title || "");
  }, [todo]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(todo?.id, updatedTitle);

    onClose();
  };

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
            name="updatedTitle"
            id="updatedTitle"
          />
          <div className="flex justify-end gap-3">
            <button
              type="submit"
              className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            >
              Save
            </button>
            <button
              onClick={onClose}
              type="button"
              className="cursor-pointer px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const ConfirmModal = ({ todo, isOpen, onClose, onDelete }) => {
  if (!isOpen) return null;

  const confirmDelete = () => {
    onDelete(todo?.id);
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
        <div className="min-w-96 bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">
            Are you Sure Delete {todo?.title}
          </h2>
          <div className="flex justify-end gap-3">
            <button
              onClick={confirmDelete}
              type="button"
              className="cursor-pointer px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
            >
              Delete
            </button>
            <button
              onClick={onClose}
              type="button"
              className="cursor-pointer px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const Todos = ({ myTodos, onOpenUpdateModal, onOpenDeleteModal, onToggleComplete }) => {
  const handleOpenModal = (todo) => {
    onOpenUpdateModal(todo);
  };

  const handleComplete = (todo) => {
    onToggleComplete(todo?.id)
  }
  return (
    <>
      <ul>
        {myTodos.map((todo) => (
          <li key={todo?.id} className="p-2">
            <div className="flex items-center gap-x-2 justify-between">
              {todo?.title}
              <span>{todo?.completed ? "Done" : "Not Done"}</span>
              <button
                onClick={() => onOpenDeleteModal(todo)}
                className="cursor-pointer px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
              >
                Delete
              </button>
              <button
                onClick={() => handleOpenModal(todo)}
                className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
              >
                Edit
              </button>
              <input onClick={() => handleComplete(todo)} type="checkbox" name="isCompleted" id="isCompleted" />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

function App() {
  const [myTodos, setMyTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);

  useEffect(() => {
    setMyTodos(todos);
  }, []);

  const addTodo = () => {
    const todo = {
      id: uuidv4(),
      title: newTodo,
      completed: false,
    };

    if (!newTodo.trim()) return;

    setMyTodos([...myTodos, todo]);
    setNewTodo("");
  };

  const handleCloseUpdateModal = () => {
    setIsUpdateModalOpen(false);
    // setIsConfirmModalOpen(false);
  };

  const handleCloseConfirmModal = () => {
    setIsConfirmModalOpen(false);
  };

  const handleOpenUpdateModal = (todo) => {
    setSelectedTodo(todo);
    setIsUpdateModalOpen(true);
    // setIsConfirmModalOpen(true)
  };

  const handleOpenConfirmModal = (todo) => {
    setSelectedTodo(todo);
    setIsConfirmModalOpen(true);
  };

  const handleUpdate = (id, updatedTitle) => {
    // console.log(todo, updatedTitle);
    setMyTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, title: updatedTitle } : todo
      )
    );
  };

  const handleToggleComplete = (id) => {
    setMyTodos((prev) => 
      prev.map((todo) => {
        todo.id === id ? {...todo, completed: !todo.completed} : todo
      })
    )
  }

  const handleDelete = (id) => {
    setMyTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <main className="grid place-items-center min-h-screen bg-gray-100">
        <div className="min-w-96 bg-white shadow-lg p-6 rounded-lg">
          <div className="flex items-center gap-x-2">
            <input
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              type="text"
              className="p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Add todo"
              autoFocus
              onKeyDown={(e) => e.key === "Enter" && addTodo()}
              required
              name="newTodo"
              id="newTodo"
            />
            <button
              onClick={addTodo}
              className="p-2 cursor-pointer bg-gray-500 text-white rounded-md hover:bg-gray-600 transition"
            >Add</button>
          </div>
          <div>
            <h2 className="text-2xl font-bold">My Todos</h2>
            <Todos
              myTodos={myTodos}
              onOpenUpdateModal={handleOpenUpdateModal}
              onOpenDeleteModal={handleOpenConfirmModal}
              onToggleComplete={handleToggleComplete}
            />
          </div>
        </div>
        {
          <EditModal
            todo={selectedTodo}
            isOpen={isUpdateModalOpen}
            onClose={handleCloseUpdateModal}
            onUpdate={handleUpdate}
          />
        }
        {
          <ConfirmModal
            todo={selectedTodo}
            isOpen={isConfirmModalOpen}
            onClose={handleCloseConfirmModal}
            onDelete={handleDelete}
          />
        }
      </main>
    </>
  );
}

export default App;
