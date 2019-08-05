import React from "react";

const ToDoInput = () => (
  <div className="d-flex align-items-center w-75 p-3">
    <input
      className="form-control rounded-pill"
      placeholder="What you need to do today ..."
    />
    <button className="btn">
      <span className="close">+</span>
    </button>
  </div>
);

export default ToDoInput;
