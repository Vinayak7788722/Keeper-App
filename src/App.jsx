import { useState } from "react";
import Footer from "./footer";
import Header from "./header";
import Note from "./note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <Header />
       
         {/* Main middle section */}
      <div className="min-h-screen bg-black text-white px-4 py-6">

      <CreateArea onAdd={addNote} />
       <div>
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}


        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
