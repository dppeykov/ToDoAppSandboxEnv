import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();

    this.state = { userName: "" };
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <p>From React</p>
      </div>
    );
  }
}
