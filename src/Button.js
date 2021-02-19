import React from "react";

export default function Button(props) {
  return (
    <div>
      <button type="button" onClick={() => props.clickHandler()}>
        {props.status ? "Log off" : "Log in"}
        {console.log(props.status)}
      </button>
    </div>
  );
}
