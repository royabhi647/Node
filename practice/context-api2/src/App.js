import React, { createContext, useState ,Component} from "react";
import Child from "./Child";
import OtherChild from "./OtherChild";


export const GlobalInfo = createContext();
function App() {
  const[color,setColor]=useState('red');
  const[day,setDay]=useState("Monday");
  const getDay = (day)=>
  {
    console.log(day);
    setDay(day)
  }
  return (

    <GlobalInfo.Provider value={{appColor:color,getDay:getDay}}>
      <div>
        <h1>App Component {day}</h1>
        <Child />
        <OtherChild />
      </div>
    </GlobalInfo.Provider>
  );
}

export default App;
