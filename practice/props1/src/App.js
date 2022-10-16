import logo from './logo.svg';
import './App.css';
import Student from './Student';
import React, { Component } from 'react'

export default class App extends Component {
  constructor()
  {
    super()
    
    this.state={
      name:"Anil"
    }
  }
  render() {
    return (
      <div>
      <h1>Hello World !</h1>
      <Student  name={this.state.name} email={"anil@test.com"}/>
      <button onClick={()=>this.setState({name:"Peter"})}>Update Name</button>
    </div>
    )
  }
}

