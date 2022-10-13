import React, { Component } from 'react'
import {ThemeContext} from './Context'

export default class User extends Component {
  render() {
    return (
      <div>
        <ThemeContext.Consumer>
            {
                (data)=>{
                    console.log(data);
                }
            }
        </ThemeContext.Consumer>
      </div>
    )
  }
}
