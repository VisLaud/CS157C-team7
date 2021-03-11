import React, { useState, Fragment } from "react";
import reactDom from "react-dom";

import FormComponent from "./FormComponent";

function FormContainer() {
  const inputModel = {
    startTime: "",
    endTime: "",
    floor: "",
    section: "",
  };
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
    <h2>{`${user.startTime} - ${user.endTime} on floor: ${user.floor}-${user.section}`}</h2>
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

//this is the exact same thing as above but above is a function based component where below is a class based component
//function based component is very easier to read and makes the code clean and has additional functionality
// class FormContainer extends Component {
//   state = {
//     startTime: "",
//     endTime: "",
//     floor: "",
//     section: "",
//   };

//   handleChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value,
//     });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     this.setState({
//       startTime: "",
//       endTime: "",
//       floor: "",
//       section: "",
//     });
//     console.log("Submitted");
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <FormComponent
//           handleChange={this.handleChange}
//           handleSubmit={this.handleSubmit}
//           data={this.state}
//         />
//       </React.Fragment>
//     );
//   }
// }
