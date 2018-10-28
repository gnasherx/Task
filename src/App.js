import React, { Component } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import AllTasks from "./components/AllTasks";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: null,
      tasks: []
    };

    this.inputTaskHandler = this.inputTaskHandler.bind(this);
    this.addTaskHandler = this.addTaskHandler.bind(this);
  }

  inputTaskHandler(event) {
    this.setState({ input: event.target.value });
  }

  addTaskHandler() {
    let new_tasks = [...this.state.tasks];
    new_tasks.push(this.state.input);
    this.setState({ tasks: new_tasks });
  }

  render() {
    let tasks = this.state.tasks;
    return (
      <div>
        <Input value={this.state.input} change={this.inputTaskHandler} />
        <Button addTask={this.addTaskHandler}>Add Task</Button>
        <ul>
          {tasks.map((t, i) => (
            <AllTasks key={i} task={t} />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
