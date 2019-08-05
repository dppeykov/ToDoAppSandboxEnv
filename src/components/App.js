import React, { Component } from "react";
import Header from "./Header";
import Counters from "./Counters";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      todoItems: [
        { action: "Buy Flowers", done: true },
        { action: "Get Shoes", done: false },
        { action: "Collect Tickets", done: true },
        { action: "Call Joe", done: true }
      ],
      userName: ""
    };
  }

  changeNameHandler = e => this.setState({ userName: e.target.value });

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
        </div>
      </div>
    );
  }
}
