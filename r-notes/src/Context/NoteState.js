// import { useState } from "react";
import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const noteInitial = [{ title: "qwerty" }, { title: "25qwerty" }];
  const [notes, setNotes] = useState(noteInitial);

  // Add a note
  const addNote = (title, description, tag) => {
    setNotes(notes.concat(noteInitial));
  };

  // Delete a note
  const deleteNote = () => {};

  // Edit a note
  const editNote = () => {};

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, editNote, deleteNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
