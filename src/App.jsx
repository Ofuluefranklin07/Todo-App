import { useState } from "react";

import Todo from "./assets/Components/Todo";

import Card from "./assets/Components/Card";

import Header from "./assets/Components/Header";

function App() {
  const [task, setTask] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  // ✅ Add a new note
  function handleTask(note) {
    setTask((prev) => [
      ...prev,
      { id: Date.now(), title: note.title, content: note.content },
    ]);
  }

  // ✅ Delete a specific note
  function handleDelete(id) {
    setTask((prev) => prev.filter((t) => t.id !== id));
  }

  // ✅ When edit button is clicked
  function handleEdit(taskToEdit) {
    setEditingTask(taskToEdit);
  }

  // ✅ Update an existing note
  function handleUpdate(updatedTask) {
    setTask((prev) =>
      prev.map((t) => (t.id === updatedTask.id ? updatedTask : t))
    );
    setEditingTask(null);
  }

  return (
    <>
      <Header />

      <Todo
        onSubmit={handleTask}
        editingTask={editingTask}
        onUpdate={handleUpdate}
      />

      <div className="card-container">
        {task.map((tasks) => (
          <Card
            key={tasks.id}
            tasks={tasks}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </div>
    </>
  );



}

export default App;
