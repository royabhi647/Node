import './App.css';
import React,{useEffect} from 'react'

function App() {
  fetch("./data.js").then((result)=>{
    result.json().then((resp)=>{
      console.log("result",resp);
    })
  })
  return (
    <div>
      <h1>Get API Call</h1>
    </div>
  )
}

export default App;