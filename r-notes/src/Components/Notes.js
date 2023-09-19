import React, { useContext } from "react";
import noteContext from "../Context/NoteContext.js";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote.js";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, addNote } = context;
  return (
    <>
      <div className="container">
        {" "}
        <div className="row my-3">
          <h1>Your notes</h1>
          {notes.map((not) => {
            return <Noteitem note={not}></Noteitem>;
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;
