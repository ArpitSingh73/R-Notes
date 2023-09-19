import React from "react";

const Noteitem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title} </h5>
            <i class="fa-solid fa-trash mx-4"></i>
            <i class="fa-solid fa-user-pen mx-2"></i>
          </div>
          <p className="card-text">.....</p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
