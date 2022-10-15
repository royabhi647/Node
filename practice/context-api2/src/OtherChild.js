import React,{useContext} from 'react'
import {GlobalInfo} from './App'


function OtherChild() {
const {appColor} = useContext(GlobalInfo);
console.log(appColor);
  return (
    <div>
    <h1 style={{color:appColor}}>OtherChild Component</h1>
    </div>
  )
}

export default OtherChild;