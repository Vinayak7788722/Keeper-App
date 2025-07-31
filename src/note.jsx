import React, { useState } from "react";

function Note(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState({
    title: props.title,
    content: props.content
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setEditedNote(prev => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSave() {
    if (editedNote.title.trim() === "" || editedNote.content.trim() === "") {
      alert("Fields cannot be empty");
      return;
    }

    props.onEdit(props.id, editedNote);
    setIsEditing(false);
  }

  function handleDelete() {
    props.onDelete(props.id);
  }

  return (
    <div className="inline-grid w-72 h-auto m-7 bg-white text-black p-4 rounded-lg shadow-[9px_9px_12px_6px_rgba(250,_243,_9,_0.64)]">
      {isEditing ? (
        <>
          <input
            name="title"
            value={editedNote.title}
            onChange={handleChange}
            className="mb-2 p-1 rounded w-full"
          />
          <textarea
            name="content"
            value={editedNote.content}
            onChange={handleChange}
            className="mb-2 p-1 rounded w-full"
            rows="3"
          />
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded"
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-400 hover:bg-gray-500 text-white px-2 py-1 rounded"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-lg font-bold mb-1">{props.title}</h1>
          <p className="mb-2">{props.content}</p>
          <div className="flex gap-2">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded"
            >
              Update
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
            >
              🗑
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Note;
