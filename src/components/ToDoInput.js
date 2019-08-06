import React from "react";

const ToDoInput = ({ onClick, onChange, currentText }) => (
  <div className="bg-dark border-top border-light">
    <div className="container d-flex align-items-center p-3">
      <input
        className="form-control rounded-pill w-75 ml-auto"
        placeholder="What do you need to do today ..."
        onChange={onChange}
        value={currentText}
      />
      <button className="btn btn btn-success ml-3 mr-auto" onClick={onClick}>
        +
      </button>
    </div>
  </div>
);

export default ToDoInput;
