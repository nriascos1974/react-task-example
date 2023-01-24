import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TasksForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSummit = (e) => {
    e.preventDefault();
    createTask({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">

      <form className="bg-gray-800 p-10 mb-4" onSubmit={handleSummit}>
        <h1 className="text-white tx-bold text-2xl mb-3">Agregar Tareas</h1>
        <input
          className="bg-slate-200 p-3 w-full mb-2"
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />
        <textarea
          className="bg-slate-200 p-3 w-full mb-1"
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <button className="bg-green-600 px-3 py-1 rounded-md mt-2 hover:bg-green-400 text-white">
          Agregar
        </button>
      </form>
    </div>
  );
}

export default TasksForm;
