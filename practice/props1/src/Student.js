import React, { Component } from 'react'

export default class extends Component {
  render() {
    console.log(this.props.name);
    return (
      <div style={{backgroundColor:"skyblue" ,margin:20}}>
        <h1>Hello {this.props.name}</h1>
        <h2>Email: {this.props.email}</h2>
      </div>
    )
  }
}
