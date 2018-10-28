import React from "react";

const button = props => (
  <button onClick={props.addTask}>{props.children}</button>
);

export default button;
