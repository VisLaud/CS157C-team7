import React, { Component } from "react";
import Form from "./FormContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {};
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {}

  render() {
    return (
      <div>
        <Form />
      </div>
    );
  }
}
export default App;
