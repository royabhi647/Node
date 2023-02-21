import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { useEffect, useState } from "react";
import { auth } from "./firebase";

function App() {
  const [userName, setUserName] = useState("");
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      // console.log(user);
      if(user){
        setUserName(user.displayName)
      }else{
        setUserName("")
      }
    })
  },[])
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home name={userName}/> }/>
          <Route path="/login" element={<Login/> }/>
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
