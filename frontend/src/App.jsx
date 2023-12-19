import React from   "react";
import Navigation from "./Components/Navigation";
import {Routes,Route} from "react-router-dom"
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Home from "./Components/Home"
import { useSelector } from "react-redux";
const App = () => {

  const isLoggedIn=useSelector((state)=>state.isLoggedIn)
  console.log(isLoggedIn);
  return (<div>
  <Routes>
    <Route path="/" element={<Navigation/>}>
<Route path="login" element={<Login/>}/>
<Route path="signup" element={<Signup/>}/>
<Route path ="home" element={<Home/>}/>

    </Route>
    </Routes>

  </div>
  )
}

export default App

