import React, { Component } from 'react'

export default class navbar extends Component {
  render() {
    return (
      <div style = {{display:'flex' , backgroundColor:"white" ,color:"blue", padding:"1rem" , justifyContent:"center" , alignItems:"center"}}>
        <h1>Movies app</h1>
        <h2 style = {{marginLeft:"2rem"}}>Favourites</h2>
      </div>
    )
  }
}
