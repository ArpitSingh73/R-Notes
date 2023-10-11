import React, { useState } from "react";
import { useContext } from "react";
import noteContext from "../Context/noteContext";
// import { useNavigate } from "react-router-dom";
const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;
  // const navigate = useNavigate(null);
  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    props.show("notes added", "success");
  };

  const onchange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div style={{ marginTop: "120px" }}>
        <div
          className="container my-3"
          style={{
            textAlign: "center",
            alignItems: "center",
            color: "#ffffff",
          }}
        >
          <h1>Create notes</h1>
        </div>
        <div className="container my-3" style={{ width: "70%" }}>
          <form>
            <div className="mb-3">
              <label
                htmlFor="title"
                className="form-label"
                style={{ color: "#ffffff" }}
              >
                <b>Title</b>
              </label>
              <input
                style={{
                  height: "55px",
                  border: "solid 3px 	#778899",
                  backgroundColor: "#d9d9d9",
                }}
                placeholder="Type the title for your note..."
                type="text"
                className="form-control"
                id="title"
                name="title"
                aria-describedby="emailHelp"
                onChange={onchange}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="description"
                className="form-label"
                style={{ color: "#ffffff" }}
              >
                <b>Notes</b>
              </label>
              <input
                placeholder="Type descriptioin for your note..."
                type="text"
                className="form-control"
                id="description"
                name="description"
                aria-describedby="emailHelp"
                onChange={onchange}
                style={{
                  boxShadow: "3px 3px 5px ",
                  height: "55px",
                  border: "solid 3px 	#778899",
                  backgroundColor: "#d9d9d9",
                }}
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="tag"
                className="form-label"
                style={{ color: "#ffffff" }}
              >
                <b>Tag</b>
              </label>
              <input
                placeholder="Type the tag for your note..."
                type="text"
                className="form-control"
                id="tag"
                name="tag"
                onChange={onchange}
                style={{
                  boxShadow: "3px 3px 2px ",
                  height: "55px",
                  border: "solid 3px 	#778899",
                  backgroundColor: "#d9d9d9",
                }}
              />
            </div>

            <button
              style={{ boxShadow: "3px 3px 5px black", height: "50px" }}
              onClick={handleClick}
              disabled={note.title.length < 4 || note.description.length < 5}
              type="submit"
              className="btn btn-primary my-4"
            >
              Add Note
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddNote;
