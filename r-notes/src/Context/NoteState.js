// import { useState } from "react";
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {


  const noteInitial = [];
  const [notes, setNotes] = useState(noteInitial);

// getallnotes

const getNotes = async()=>{
  const response = await fetch("http://localhost:5000/api/notes/fetchnotes", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
       "auth-token" : localStorage.getItem("token")
    },
  
  });
    const op = await response.json();
    setNotes(op);

}


  // Add a note
  const addNote = async(title, description, tag) => {
    // setNotes(notes.concat(noteInitial));

    const response = await fetch(`http://localhost:5000/api/notes/update`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
         "auth-token" :localStorage.getItem("token")
      },
      body: JSON.stringify({title, description, tag}),
    });
      const op = await response.json();
      setNotes(notes.concat(op));


  };

  // Delete a note
  const deleteNote = async(id) => {

    
      const response = await fetch(`http://localhost:5000/api/notes/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
           "auth-token" :localStorage.getItem("token")
        },
       
      });
      const json = response.json(); 
      const newNotes = notes.filter((note) => { return note._id !== id })
      setNotes(newNotes)
  };

  // Edit a note
  const editNote = async (id, title, desc, tag) => {

    const response = await fetch(`http://localhost:5000/api/notes/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
         "auth-token" :localStorage.getItem("token")
      },
      body: JSON.stringify({title, desc, tag}),
    });
      const op = await response.json();
  
let newnotes = JSON.parse(JSON.stringify(notes));
    for (let i = 0; i < notes.length; i++) {

      const element = newnotes[i];
      if (element._id === id) {
        newnotes[i].title = title;
        newnotes[i].description = desc;
        newnotes[i].tag = tag;
        break;
      }
    }
setNotes(newnotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, getNotes , editNote, deleteNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
  }

export default NoteState;
