import logo from './logo.svg';
import './App.css';
import Us from "./Components/Us";
import Ue1 from './Components/Ue1';
import Ue2 from './Components/Ue2';
import Infinite from './Components/Infinite';
import Ue3 from './Components/Ue3';
import React ,{useState}from 'react';
import context from './Components/Context';
import Navbar from './Components/Navbar';
import Parent1 from './Components/Parent1';
import Parent2 from './Components/Parent2';
function App() {
  const [theme, setTheme] = useState(false);
  
  
  return (
    <context.Provider value={theme}>
      <button onClick={() => setTheme(!theme)}>Change Theme</button>
    {/* //  <Us></Us>
    //  <Ue1></Ue1>
    //  <Ue2></Ue2>
    //  <Infinite></Infinite>
    // <Ue3></Ue3> */}

    <Navbar/>
    <Parent1/>
    <Parent2/>
    </context.Provider>
  );
}

export default App;
