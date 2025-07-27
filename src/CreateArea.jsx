import React, { useState } from "react";

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    function handleChange(event) {
        const { name, value } = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

  function submitNote(e) {
  e.preventDefault();

  if (note.title.trim() === "" || note.content.trim() === "") {
    alert("Please fill out both title and content.");
    return;
  }

  props.onAdd(note);

  // Clear inputs
  setNote({
    title: "",
    content: ""
  });
}


    return (
        <div>
            <form>
            <div className="flex flex-col items-end space-y-1 w-full max-w-md mx-auto mt-10 ">
                <input
                    name="title"
                    className="w-full max-w-md bg-white text-black p-4 rounded-lg "
                    onChange={handleChange}
                    value={note.title}
                    placeholder="Title"
                />

                <textarea
                    name="content"
                    className="w-full max-w-md bg-white text-black p-4 rounded-lg "
                    onChange={handleChange}
                    value={note.content}
                    placeholder="Take a note..."
                    rows="3"
                />

                <button
                    onClick={submitNote}
                    className="cursor-pointer bg-yellow-500 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded shadow"
                >ADD</button>


         </div>
            </form>
        </div>
    
    );
}


export default CreateArea;