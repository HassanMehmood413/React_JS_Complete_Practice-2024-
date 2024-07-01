
import './App.css';
import Alert from './Components/Alert';
import About from './Components/About'
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  //For Alert
  const [myAlert, SetAlert] = useState(null)

  const ShowAlert = (message, type) => {
    SetAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      SetAlert()
    }, 1500);
  }


  //For button toggle
  const [mode, setmode] = useState({
    color: 'black',
    backgroundColor: '#d9d9d9'
  })
  const [Btn, SetBtn] = useState("Light Mode")

  // toggle white and dark mode 
  const togglemode = () => {
    if (mode.color == 'white') {
      setmode({
        color: 'black',
        backgroundColor: '#d9d9d9'
      })
      document.body.style.backgroundColor = 'white';
      SetBtn('Light Mode');
      ShowAlert("Success:  ", "Entered Light Mode ");
    }
    else {
      setmode({
        color: 'white',
        backgroundColor: '#343a40'
      })
      document.body.style.backgroundColor = '#012a4a';
      SetBtn('Dark Mode');
      ShowAlert('Success:', " Entered Dark Mode");
    }
  }




  return (
    <>
      <Navbar title="React JS" liText="Home" mode={mode} togglebutton={togglemode} btn={Btn} />
      <Alert myAlert={myAlert} />

        <BrowserRouter>
          <div className="container my-4" mode={mode}>
            <Routes>
              <Route exact path="/about" element={<About />}></Route>
              <Route
                exact path="/"
                element={
                  <TextForm
                    ShowAlert={ShowAlert}
                    mode={mode}
                  />
                }
              ></Route>
            </Routes>
          </div>
        </BrowserRouter>
    </>

  );
}

export default App;
