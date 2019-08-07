import React, { Component } from "react";
import Header from "./Header";
import Counters from "./Counters";
import ToDoInput from "./ToDoInput";
import AllDone from "./AllDone";
import AlertIfEmpty from "./AlertIfEmpty";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      todoItems: [],
      userName: "",
      newTextValue: "",
      noInputButClicked: false
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
        newTextValue: "",
        noInputButClicked: false
      });
    }
  };

  render() {
    let { userName, todoItems, newTextValue, noInputButClicked } = this.state;

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
          <AlertIfEmpty input={noInputButClicked} />
          {todoItems ? <AllDone /> : null}
        </div>
      </div>
    );
  }
}
