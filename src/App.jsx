import { useState } from "react";
import Footer from "./footer";
import Header from "./Header";
import Note from "./note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => [...prevNotes, newNote]);
  }

  function deleteNote(id) {
    setNotes(prevNotes => prevNotes.filter((_, index) => index !== id));
  }

  function editNote(id, updatedNote) {
    setNotes(prevNotes =>
      prevNotes.map((note, index) =>
        index === id ? updatedNote : note
      )
    );
  }

  return (
    <>
      <Header />

      {/* Main middle section */}
      <div className="min-h-screen bg-black text-white px-4 py-6">
        <CreateArea onAdd={addNote} />
        <div>
          {notes.map((noteItem, index) => (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
              onEdit={editNote}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
