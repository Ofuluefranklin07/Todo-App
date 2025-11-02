import { useState, useEffect } from "react";


export default function Todo({ onSubmit, editingTask, onUpdate }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setContent(editingTask.content);
    }
  }, [editingTask]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!title || !content) return;

    const note = { title, content };

    if (editingTask) {
      onUpdate({ ...editingTask, title, content });
    } else {
      onSubmit(note);
    }

    setTitle("");
    setContent("");
  }


  return (
    <form className="create-note" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Enter content..."
        rows={3}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">
        {editingTask ? "Update" : "Add"}
      </button>
    </form>
  );
}
