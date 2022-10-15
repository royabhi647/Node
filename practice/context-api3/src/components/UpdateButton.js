import React,{Component} from "react";
import { CommonContext } from "./CommonContext";

function UpdateButton() {
  return (
    <CommonContext.Consumer >
    {
        ({updateColor})=>(
           <div>
             <button onClick={()=>updateColor('yellow')}>Update yellow Color</button>
             <button onClick={()=>updateColor('blue')}>Update blue Color</button>
             <button onClick={()=>updateColor('red')}>Update red Color</button>
           </div>
        )
    }
  </CommonContext.Consumer>
  )
}

export default UpdateButton
