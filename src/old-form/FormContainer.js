import React, { useState, Fragment } from "react";
import reactDom from "react-dom";

import useStyles from "./form-styles";
import FormComponent from "./FormComponent";

function FormContainer() {
  const inputModel = {
    startTime: "",
    endTime: "",
    floor: "",
    section: "",
  };
  const classes = useStyles();
  const [inputData, setInputData] = useState(inputModel);
  const [userData, setUserData] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setInputData((prevInputData) => {
      return { ...prevInputData, [name]: value };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setUserData((prevUserData) => {
      return [...prevUserData, inputData];
    });
    setInputData(inputModel);
  }

  const data = userData.map((user) => (
    <h2
      key={`${user.startTime}+${user.endTime}`}
    >{`${user.startTime} - ${user.endTime} on floor: ${user.floor}-${user.section}`}</h2>
  ));

  return (
    <React.Fragment>
      <FormComponent
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        data={inputData}
      />
      <br />
      <h2>Today's plan</h2>
      {data}
    </React.Fragment>
  );
}

export default FormContainer;
