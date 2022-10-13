import React, { Component } from "react";
import User from "./User";
import {ThemeContext} from "./Context";

export default class App extends Component {
  constructor()
  {
    super()
    this.state={
      theme:"no theme applied"
    }
  }
  render() {
    return (
      <div>
        <h1>Context Api</h1>
        <button onClick={()=>{this.setState({theme:"gray theme"})}}>Change Value</button>
        <ThemeContext.Provider value={this.state.theme}>
          <User />
        </ThemeContext.Provider>
      </div>
    );
  }
}
