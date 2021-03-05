import React from "react";

function FormComponent(props) {
  return (
    <main>
      <form>
        <label>
          From:
          <input
            name="startTime"
            value={props.data.startTime}
            type="time"
            min="09:00"
            max="17:00"
            onChange={props.handleChange}
            required
          />
        </label>
        <br />
        <label>
          To:
          <input
            name="endTime"
            value={props.data.endTime}
            type="time"
            min="09:00"
            max="17:00"
            onChange={props.handleChange}
            required
          />
        </label>
        <br />
        <label>
          Floor:
          <select
            value={props.data.floor}
            name="floor"
            onChange={props.handleChange}
          >
            <option value="">Please Choose a Floor</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <br />
        <label>
          Section:
          <select
            value={props.data.section}
            name="section"
            onChange={props.handleChange}
          >
            <option value="">Please Choose a Section</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
      </form>

      <form onSubmit={props.handleSubmit}>
        <button>Submit</button>
      </form>

      <h1>
        {props.data.startTime == "" || props.data.endTime == ""
          ? null
          : `Your start time is ${props.data.startTime} and end time is ${props.data.endTime}`}
      </h1>
      <h1>
        {props.data.floor == "" || props.data.section == ""
          ? null
          : `And you are going to ${props.data.floor} - ${props.data.section}`}
      </h1>
    </main>
  );
}

export default FormComponent;
