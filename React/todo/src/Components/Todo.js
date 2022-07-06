// rcc - react class component
// rfc - react function component

import React, { Component } from 'react'

export default class Todo extends Component {
  constructor(){
    super();

    this.state={
      tasks:[
        {id: 1, task: "Revise Js"},
        {id: 2, task: "Revise DSA Level-1"},
      ],
      curTask: "",
    }
  }


handleChange = (e) => {
  console.log(e.target.value);
  this.setState({
    curTask:e.target.value,
  });
};


handleSubmit = () => {
  this.setState({
    tasks: [
      ...this.state.tasks,
      {task:this.state.curTask, id: this.state.tasks.length+1},
    ],
    curTask:"",
  })
}


handleDeleteTask = (id) =>{
  let narr = this.state.tasks.filter((taskObj) => {
    return taskObj.id != id;
  });
  this.setState({
    tasks: [...narr],
  });
};


  render() {
    console.log("render method is called");
    return (
      // jsx starts
      // <div>Todo</div>
      <div>
        <input type="text" value={this.state.curTask} onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>Submit</button>


        {
          // use when need to write JS in jsx
          this.state.tasks.map((taskObj)=>{
            return(
              <li>
              <p>{taskObj.task}</p>
              <button onClick={() => this.handleDeleteTask(taskObj.id)}>Delete</button>
              </li>
            )
          })
        }
      </div>
    )
  }
}
