import React, { Component } from "react";
import Button from "./Button";

class App extends Component {
  constructor() {
    super();
    this.state = {
      status: false,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState((prevState) => {
      return {
        status: !prevState.status,
      };
    });
  }

  render() {
    return (
      <div>
        {this.state.status ? <h1>Loggedddddddddddddddd in</h1> : <h1>Logged out</h1>}
        <Button clickHandler={this.clickHandler} status={this.state.status} />
      </div>
    );
  }
}
export default App;
