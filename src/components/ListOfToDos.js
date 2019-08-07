import React from "react";

const ListOfToDos = ({ toDo, done, handlingStatusChange }) => {
  return (
    <div className="container mt-4">
      <div>Items to be done:</div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">To Do:</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {toDo.map((todo, i) => {
            return (
              <tr key={todo.id}>
                <th>{i + 1}</th>
                <td>{todo.action}</td>
                <td>
                  <input
                    type="checkbox"
                    onClick={() => handlingStatusChange(todo.id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>Items done:</div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Task done:</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {done.map((todo, i) => {
            return (
              <tr key={todo.id}>
                <th>{i + 1}</th>
                <td>{todo.action}</td>
                <td>
                  <input
                    type="checkbox"
                    onClick={() => handlingStatusChange(todo.id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListOfToDos;
