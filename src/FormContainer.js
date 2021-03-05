import React, { Component } from "react";
import FormComponent from "./FormComponent";

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      startTime: "",
      endTime: "",
      floor: "",
      section: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      startTime: "",
      endTime: "",
      floor: "",
      section: "",
    });
    console.log("Submitted");
  }

  render() {
    return (
      <FormComponent
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        data={this.state}
      />
    );
  }
}

export default FormContainer;
