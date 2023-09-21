import { React, useContext } from "react";
import noteContext from "../Context/NoteContext.js";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note , updatenote } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title} </h5>
            <i
              className="fa-solid fa-trash mx-4"
              onClick={() => deleteNote(note._id)}
            ></i>
            <i className="fa-solid fa-user-pen mx-2" onClick={()=>{updatenote(note)}} ></i>
          </div>
          <p className="card-text">.....</p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
