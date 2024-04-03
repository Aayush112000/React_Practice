// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.tsx';
import TextFrom from './components/TextForm.tsx';
// import About from './components/About.tsx';
import React from 'react';
import Alert from './components/Alert.tsx';

// import {
//   BrowserRouter as Router,
//   Switch ,
//   // Routes,
//   Route,
//   // Link,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')  //Whether dark mode is enable or not

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
        msg: message,
        type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500)
}


  const toggleMode = () =>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success")
      document.title = "TextUtils - Dark Mode"
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success")
      document.title = "TextUtils - Light Mode"
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" aboutText="about textUtils" mode={mode} toggleMode={toggleMode}/>
      {/* <Navbar/> */}
      <Alert alert={alert}/>
      {/* <div className="container my-3"> */}
        {/* <Switch> */}
          {/* <Route exact path="/about"> */}
            {/* <About /> */}
          {/* </Route> */}
          {/* <Route exact path="/"> */}
            <TextFrom heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>
          {/* </Route> */}
        {/* </Switch > */}
      {/* </div> */}
    {/* </Router> */}
    </>
  );
}

export default App;
