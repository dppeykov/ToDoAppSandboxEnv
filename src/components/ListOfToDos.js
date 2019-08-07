import React from "react";

const ListOfToDos = ({ all }) => {
  let doneItemsList = all.filter(item => item.done === true);
  let todoItemsList = all.filter(item => item.done === false);

  return (
    <div>
      <div>
        {todoItemsList.map(todo => (
          <div key={todo.id}>
            {todo.action}
            {todo.id}
          </div>
        ))}
      </div>
      <div>
        {doneItemsList.map(todo => (
          <div key={todo.id}>
            {todo.action}
            {todo.id}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListOfToDos;
