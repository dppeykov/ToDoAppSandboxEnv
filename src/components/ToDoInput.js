import React from "react";

const ToDoInput = () => (
  <div className="container d-flex align-items-center p-3">
    <input
      className="form-control rounded-pill w-75 ml-auto"
      placeholder="What do you need to do today ..."
    />
    <button className="btn mr-auto">
      <span className="close">+</span>
    </button>
  </div>
);

export default ToDoInput;
