// import { useState } from "react";
import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {


  const noteInitial = [];
  const [notes, setNotes] = useState(noteInitial);
  const [user, setUser] = useState("Arpit");
// getallnotes

const getNotes = async(e)=>{
  // e.preventDefault();
  // e.stopPropagation();
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
    // e.preventDefault();
    // e.stopPropagation();

    const response = await fetch(`http://localhost:5000/api/notes/addnote`,{
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
    // e.preventDefault();
    // e.stopPropagation();
    
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
  const editNote = async (id, title, description, tag) => {
    // e.preventDefault();
    // e.stopPropagation();
    const response = await fetch(`http://localhost:5000/api/notes/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
         "auth-token" :localStorage.getItem("token")
      },
      body: JSON.stringify({title, description, tag}),
    });
      // const op = await response.json();
  
let newnotes = JSON.parse(JSON.stringify(notes));
    for (let i = 0; i < notes.length; i++) {

      const element = newnotes[i];
      if (element._id === id) {
        newnotes[i].title = title;
        newnotes[i].description = description;
        newnotes[i].tag = tag;
        break;
      }
    }
setNotes(newnotes);
  };

  return (
    <NoteContext.Provider
      value={{user,setUser, notes, addNote, getNotes , editNote, deleteNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
  }

export default NoteState;
