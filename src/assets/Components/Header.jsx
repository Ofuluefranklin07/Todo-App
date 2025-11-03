import React from "react";
import { HighlighterIcon } from "lucide-react";
function Header() {
  return (
    
    <header>
        <div className="header-content">
      <h1 className="text-[40px]">
        <HighlighterIcon size={35}/>
       My Keeper App
      </h1>
          </div>
    </header>

  );
}

export default Header;





// import React, { useEffect, useState } from "react";

// export default function Todo({ Sumbit }) {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [notes, setNotes] = useState([]);
//   const [editingId, setEditingId] = useState(null);

//   // persist notes to localStorage
//   useEffect(() => {
//     const raw = localStorage.getItem("todo-notes");
//     if (raw) {
//       try {
//         setNotes(JSON.parse(raw));
//       } catch {
//         setNotes([]);
//       }
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("todo-notes", JSON.stringify(notes));
//   }, [notes]);

//   function resetForm() {
//     setTitle("");
//     setContent("");
//     setEditingId(null);
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     const trimmedTitle = title.trim();
//     const trimmedContent = content.trim();
//     if (!trimmedTitle && !trimmedContent) return;

//     if (editingId) {
//       // update existing note
//       setNotes((prev) =>
//         prev.map((n) =>
//           n.id === editingId ? { ...n, title: trimmedTitle, content: trimmedContent, updatedAt: Date.now() } : n
//         )
//       );
//       if (typeof Sumbit === "function") {
//         Sumbit({ id: editingId, title: trimmedTitle, content: trimmedContent, updatedAt: Date.now() });
//       }
//     } else {
//       // create new note
//       const note = { id: Date.now().toString(), title: trimmedTitle, content: trimmedContent, createdAt: Date.now() };
//       setNotes((prev) => [note, ...prev]);
//       if (typeof Sumbit === "function") Sumbit(note);
//     }

//     resetForm();
//   }

//   function handleEdit(note) {
//     setTitle(note.title);
//     setContent(note.content);
//     setEditingId(note.id);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }

//   function handleDelete(id) {
//     if (!confirm("Delete this note?")) return;
//     setNotes((prev) => prev.filter((n) => n.id !== id));
//   }

//   return (
//     <>
//       <div className="max-w-xl mx-auto p-4">
//         <form className="create-note mb-6" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Enter Title..."
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="w-full mb-2 px-3 py-2 rounded border border-slate-300 focus:outline-none"
//           />
//           <textarea
//             placeholder="Enter content..."
//             rows={3}
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             className="w-full mb-3 px-3 py-2 rounded border border-slate-300 focus:outline-none"
//           />
//           <div className="flex gap-2">
//             <button
//               type="submit"
//               className="px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-700"
//             >
//               {editingId ? "Save" : "Add"}
//             </button>
//             {editingId ? (
//               <button
//                 type="button"
//                 onClick={resetForm}
//                 className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
//               >
//                 Cancel
//               </button>
//             ) : null}
//           </div>
//         </form>

//         <div className="space-y-3">
//           {notes.length === 0 && (
//             <div className="text-center text-slate-500">No notes yet. Add one above.</div>
//           )}

//           {notes.map((note) => (
//             <article
//               key={note.id}
//               className="p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow border border-slate-100 flex justify-between items-start"
//             >
//               <div className="flex-1 pr-4">
//                 <h3 className="font-semibold text-slate-900">{note.title || "Untitled"}</h3>
//                 <p className="text-sm text-slate-700 whitespace-pre-wrap">{note.content}</p>
//                 <div className="text-xs text-slate-500 mt-2">
//                   {note.updatedAt
//                     ? `Updated ${new Date(note.updatedAt).toLocaleString()}`
//                     : `Created ${new Date(note.createdAt).toLocaleString()}`}
//                 </div>
//               </div>

//               <div className="flex flex-col gap-2">
//                 <button
//                   onClick={() => handleEdit(note)}
//                   className="px-3 py-1 bg-yellow-100 text-yellow-900 rounded hover:bg-yellow-200 text-sm"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(note.id)}
//                   className="px-3 py-1 bg-red-100 text-red-900 rounded hover:bg-red-200 text-sm"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }