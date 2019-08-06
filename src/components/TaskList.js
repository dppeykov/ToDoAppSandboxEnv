import React from "react";
import TaskDone from "./TaskDone";
import TaskNotDone from "./TaskNotDone";

const TaskList = ({ allTasks }) => (
  <div className="container m-4">
    {allTasks.length === 0 ? (
      <div className="container d-flex flex-column justify-content-center align-items-center text-center">
        <div className="mt-5 pt-5 pb-5">
          <h3>
            All done! <br /> No more tasks today!
          </h3>
        </div>

        <div>
          <img
            src="https://img.icons8.com/officel/80/000000/checked.png"
            alt="All done"
          />
        </div>
      </div>
    ) : (
      allTasks.map(task => (
        <div key={task.id}>
          {task.done ? (
            <TaskDone description={task.action} />
          ) : (
            <TaskNotDone description={task.action} />
          )}
        </div>
      ))
    )}
  </div>
);

export default TaskList;
