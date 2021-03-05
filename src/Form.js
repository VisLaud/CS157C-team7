import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      startTime: "",
      endTime: "",
      floor: "",
      section: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <main>
        <form>
          <label>
            From:
            <input
              name="startTime"
              value={this.state.startTime}
              type="time"
              min="09:00"
              max="17:00"
              onChange={this.handleChange}
              required
            />
          </label>
          <br />
          <label>
            To:
            <input
              name="endTime"
              value={this.state.endTime}
              type="time"
              min="09:00"
              max="17:00"
              onChange={this.handleChange}
              required
            />
          </label>
          <br />
          <lable>
            Floor:
            <select
              value={this.state.floor}
              name="floor"
              onChange={this.handleChange}
            >
              <option value="">Please Choose a Floor</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </lable>
          <br />
          <lable>
            Section:
            <select
              value={this.state.section}
              name="section"
              onChange={this.handleChange}
            >
              <option value="">Please Choose a Section</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </lable>
        </form>
        <button>Submit</button>

        <h1>
          {this.state.startTime == "" || this.state.endTime == ""
            ? null
            : `Your start time is ${this.state.startTime} and end time is ${this.state.endTime}`}
        </h1>
        <h1>
          {this.state.floor == "" || this.state.section == ""
            ? null
            : `And you are going to ${this.state.floor} - ${this.state.section}`}
        </h1>
      </main>
    );
  }
}

export default Form;
