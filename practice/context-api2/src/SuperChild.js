import React,{useContext} from 'react'
import {GlobalInfo} from './App'

function SuperChild() {
const {appColor,getDay} = useContext(GlobalInfo);
const day = "Sunday";
console.log(appColor);
  return (
    <div>
    <h1 style={{color:appColor}}>SuperChild Component</h1>
    <button onClick={()=>getDay(day)}>Get Day</button>
    </div>
  )
}

export default SuperChild;