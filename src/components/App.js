import React, { Component } from "react";
import Header from "./Header";
import Counters from "./Counters";
import ToDoInput from "./ToDoInput";
import TaskList from "./TaskList";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      todoItems: [],
      userName: ""
    };
  }

  changeNameHandler = e => this.setState({ userName: e.target.value });

  addingMoreTasksHandler = e => {
    let newItem = {
      action: Math.random().toString() + " TEXT",
      done: false,
      id: Math.floor(Math.random() * 100000000000000)
    };
    this.setState({ todoItems: [...this.state.todoItems, newItem] });
    console.log(this.state);
  };

  render() {
    let { userName, todoItems } = this.state;

    let itemsDone = todoItems.reduce((acc, item) => {
      return item.done ? acc + 1 : acc + 0;
    }, 0);

    return (
      <div>
        <div>
          <Header user={userName} onChange={this.changeNameHandler} />
        </div>
        <div>
          <Counters
            itemsDone={itemsDone}
            itemsLeft={todoItems.length - itemsDone}
          />
          <ToDoInput onClick={this.addingMoreTasksHandler} />
          <TaskList allTasks={todoItems} />
        </div>
      </div>
    );
  }
}
