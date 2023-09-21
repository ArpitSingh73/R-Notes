// import { useState } from "react";
import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {


  const noteInitial = [];
  const [notes, setNotes] = useState(noteInitial);

// getallnotes

const getNotes = async()=>{
  const response = await fetch("http://localhost:3000/api/notes/fetchnotes", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
       "auth-token" :"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwYjQyOGExYzIyN2I4NGY0NjQzZmJlIn0sImlhdCI6MTY5NTIzNjg2Nn0.rdLOOo5nHIZPLGM3sbXsF5z8CXHwl--KIUnMVH1UldE"
    },
    // body: JSON.stringify({title, description, tag}),
  });
    const op = await response.json();
    setNotes(op);

}


  // Add a note
  const addNote = async(title, description, tag) => {
    // setNotes(notes.concat(noteInitial));

    const response = await fetch("http://localhost:3000/api/notes/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
         "auth-token" :"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwYjQyOGExYzIyN2I4NGY0NjQzZmJlIn0sImlhdCI6MTY5NTIzNjg2Nn0.rdLOOo5nHIZPLGM3sbXsF5z8CXHwl--KIUnMVH1UldE"
      },
      body: JSON.stringify({title, description, tag}),
    });
      const op = await response.json();
      setNotes(notes.concat(op));


  };

  // Delete a note
  const deleteNote = async(id) => {

    
      const response = await fetch("http://localhost:3000/api/notes/delete/650b428a1c227b84f4643fbe", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
           "auth-token" :"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwYjQyOGExYzIyN2I4NGY0NjQzZmJlIn0sImlhdCI6MTY5NTIzNjg2Nn0.rdLOOo5nHIZPLGM3sbXsF5z8CXHwl--KIUnMVH1UldE"
        },
        // body: JSON.stringify({title, description, tag}),
      });
        const op = await response.json();
       
    
    

    const newnote = notes.filter((note) => {
      return notes._id !== id;
    });
    setNotes(newnote);
  };

  // Edit a note
  const editNote = async (id, title, desc, tag) => {

    const response = await fetch("http://localhost:3000/api/notes/update/650b428a1c227b84f4643fbe", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
         "auth-token" :"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjUwYjQyOGExYzIyN2I4NGY0NjQzZmJlIn0sImlhdCI6MTY5NTIzNjg2Nn0.rdLOOo5nHIZPLGM3sbXsF5z8CXHwl--KIUnMVH1UldE"
      },
      body: JSON.stringify({title, desc, tag}),
    });
      const op = await response.json();
  
let newnotes = JSON.parse(JSON.stringify(notes));
    for (let i = 0; i < notes.length; i++) {
      if (notes[i]._id === id) {
        notes[i].title = title;
        notes[i].description = desc;
        notes[i].tag = tag;
        break;
      }
    }
setNotes(newnotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, getNotes , editNote, deleteNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
  }

export default NoteState;
