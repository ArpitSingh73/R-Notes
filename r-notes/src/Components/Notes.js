import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../Context/noteContext.js";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote.js";
import { useNavigate } from "react-router-dom";

const Notes = (props) => {
  const context = useContext(noteContext);
  const { notes, getNotes, editNote } = context;
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      navigate("/login");
    }
  }, []);

  const refr = useRef(null);
  const refClose = useRef(null);
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  const updateNote = (currentNote) => {
    refr.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
    // props.show("Notes updated", "success");
  };

  const handleClick = (e) => {
    editNote(note.id, note.etitle  , note.edescription  , note.etag);
    
    refClose.current.click();
    props.show("Notes updated", "success");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <AddNote show={props.show} />

      <div className="container">
        {" "}
        <button
          ref={refr}
          type="button"
          className="btn btn-primary d-none"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Launch demo modal
        </button>{" "}
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit window
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                {/* <span aria-hidden="true">&times;</span> */}
              </button>
            </div>
            <div className="modal-body"   >
              ................................................................................................................................................
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Edit title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="etitle"
                  name="etitle"
                  value={note.etitle}
                  aria-describedby="emailHelp"
                  onChange={onChange}
                  style={{boxShadow :"3px 3px 2px "}}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="edescription" className="form-label">
                 Edit notes
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="edescription"
                  name="edescription"
                  value={note.edescription}
                  aria-describedby="emailHelp"
                  onChange={onChange}
                  style={{boxShadow :"3px 3px 2px "}}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="etag" className="form-label">
                  Edit tag
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="etag"
                  name="etag"
                  value={note.etag}
                  onChange={onChange}
                  style={{boxShadow :"3px 3px 2px "}}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                style={{boxShadow :"3px 3px 2px "}}
              >
                Close
              </button>
              <button
                onClick={handleClick}
                type="button"
                className="btn btn-primary"
                style={{boxShadow :"3px 3px 2px "}}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row my-3">
          <h1    style={{  textAlign : "center",alignItems : "center", color:"#ffffff" }}>{localStorage.getItem("name")}'s notes</h1>
          {notes.map((note) => {
            return (
              <Noteitem
                key={note._id}
                note={note}
                updateNote={updateNote}
                show={props.show}
                style={{boxShadow :"3px 3px 2px "}}
              ></Noteitem>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Notes;
