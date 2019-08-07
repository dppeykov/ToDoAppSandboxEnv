import React from "react";

const ListOfToDos = ({ all }) => {
  return all.map(item => {
    return (
      <div key={item.id}>
        {item.action}, {item.done ? "true" : "false"}
      </div>
    );
  });
};

export default ListOfToDos;
