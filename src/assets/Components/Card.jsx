import { DeleteIcon, EditIcon } from "lucide-react";

export default function Card({ tasks, onDelete, onEdit }) {
  function handleDelete() {
    onDelete(tasks.id);
  }
  function handleEdit() {
    onEdit(tasks);
  }

  return (
    <>
      <div className="note-card">
        <h1>{tasks.title}</h1>
        <p>{tasks.content}</p>
        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={handleEdit}
            className="flex items-center gap-1 bg-blue-500 text-white px-3 py-1.5 rounded-md hover:bg-blue-600 active:scale-95 transition-all duration-150 shadow-sm">
            <EditIcon size={16} />
            <span className="text-sm font-medium">Edit</span>
          </button>

          <button
            onClick={handleDelete}
            className="flex items-center gap-1 bg-red-500 text-white px-3 py-1.5 rounded-md hover:bg-red-600 active:scale-95 transition-all duration-150 shadow-sm">
            <DeleteIcon size={16} />
            <span className="text-sm font-medium">Delete</span>
          </button>
        </div>
      </div>
    </>
  );
}