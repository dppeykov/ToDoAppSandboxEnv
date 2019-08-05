import React, { Component } from "react";
import Header from "./Header";

export default class App extends Component {
  constructor() {
    super();

    this.state = { userName: "" };
  }

  changeNameHandler = e => this.setState({ userName: e.target.value });

  render() {
    return (
      <div>
        <div>
          <Header
            user={this.state.userName}
            onChange={this.changeNameHandler}
          />
        </div>
      </div>
    );
  }
}
