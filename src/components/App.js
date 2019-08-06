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
      userName: "",
      newTextValue: "",
      noInputButClicked: false //use to track if there is something written
    };
  }

  changeNameHandler = e => this.setState({ userName: e.target.value });

  savingNewTasksText = e => this.setState({ newTextValue: e.target.value });

  addingMoreTasksHandler = e => {
    if (this.state.newTextValue === "") {
      this.setState({ noInputButClicked: true });
    } else {
      let newItem = {
        action: this.state.newTextValue,
        done: false,
        id: Math.floor(Math.random() * 100000000000000)
      };
      this.setState({
        todoItems: [...this.state.todoItems, newItem],
        newTextValue: ""
      });
    }
  };

  render() {
    let { userName, todoItems, newTextValue } = this.state;

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
          <ToDoInput
            onClick={this.addingMoreTasksHandler}
            onChange={this.savingNewTasksText}
            currentText={newTextValue}
          />
          {/* here you'll neer to add an additional component that will render the alert if no input,
                  it will take the TaskList and also if on deletion you'll need something*/}
          <TaskList allTasks={todoItems} />
        </div>
      </div>
    );
  }
}
