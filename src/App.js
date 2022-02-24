
import './App.css';
import Aboutus from './components/Aboutus';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React,{useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
function App() {
  const [mode, setmode]= useState("light");
  const [alert, setalert]= useState(null);
  const showalert= (message,type)=>
  {
    setalert(
      {
        message:message,
        type:type
      }
    )  
    setTimeout(() => {
      setalert(null)
    }, 1500);  
  }
  const togglemode= ()=>
  {
    if(mode === 'light')
    {
      setmode('dark')
      document.body.style.backgroundColor='#042743';
      showalert("Dark mode has been enabled","success");
      document.title = "TextUtils - Dark Mode"

      // setInterval(() => {
      //   document.title = "TextUtils is Amazing Mode"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now"
      // }, 1500);
    }
    else
    {
      setmode('light')
      document.body.style.backgroundColor='white';
      showalert("Light mode has been enabled","success");
      document.title = "TextUtils - Light Mode"
    }
  }

  return (
    <>
    {/* <Router> */}
<Navbar title="TextUtil" mode={mode}  togglemode={togglemode}/>
<Alert alert={alert}/>
<div className="container my-3">
{/* <Routes> */}
          {/* <Route path="/about" exact element={<Aboutus mode={mode}/>} /> */}
          {/* <Route path="/" exact element={<TextForm heading="Enter The Text To Analyze Below" mode={mode} showalert={showalert}/>}/> */}
{/* </Routes> */}
<TextForm heading="Enter The Text To Analyze Below" mode={mode} showalert={showalert}/>
</div>
{/* </Router> */}
 </>
  )
}

export default App;
