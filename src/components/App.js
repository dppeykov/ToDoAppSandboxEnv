import React, { Component } from "react";
import Header from "./Header";
import Counters from "./Counters";
import ToDoInput from "./ToDoInput";
import AllDone from "./AllDone";
import AlertIfEmpty from "./AlertIfEmpty";
import ListOfToDos from "./ListOfToDos";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      todoItems: [
        {
          action: "Some text here - could be long or short- doesn't matter",
          done: false,
          id: 4
        }
      ],
      doneItems: [
        {
          action: "Another text here - could be long or short- doesn't matter",
          done: true,
          id: 5
        }
      ],
      userName: "",
      newTextValue: "",
      noInputButClicked: false
    };
  }

  changeNameHandler = e => this.setState({ userName: e.target.value });

  savingNewTasksText = e => this.setState({ newTextValue: e.target.value });

  handlingStatusChange = idx => {
    let clickedItem = this.state.todoItems.filter(item => item.id === idx);
    clickedItem[0].done = clickedItem.done ? false : true;
    console.log(clickedItem);
    console.log("Before the change:", this.state.doneItems);
    this.setState({ doneItems: [...this.state.doneItems, clickedItem] });
    console.log("After the change:", this.state.doneItems);

    let allButTheClicked = this.state.todoItems.filter(
      item => item.id !== idx && item.done !== true
    );
    this.setState({
      todoItems: allButTheClicked
    });
  };

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
    let {
      userName,
      todoItems,
      doneItems,
      newTextValue,
      noInputButClicked
    } = this.state;

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
          {todoItems.length === 0 ? (
            <AllDone />
          ) : (
            <ListOfToDos
              toDo={todoItems}
              done={doneItems}
              handlingStatusChange={this.handlingStatusChange}
            />
          )}
        </div>
      </div>
    );
  }
}
