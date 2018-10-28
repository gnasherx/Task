import React from "react";
import Tasks from "../components/Tasks";

const allTasks = props => (
  <ul>
    {props.allTasks.map((t, i) => (
      <Tasks key={i} task={t} />
    ))}
  </ul>
);

export default allTasks;
