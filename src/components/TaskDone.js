import React from "react";

const TaskDone = ({ description }) => (
  <div>
    <h1>All tasks done today:</h1>
    <p>{description}</p>
  </div>
);

export default TaskDone;
