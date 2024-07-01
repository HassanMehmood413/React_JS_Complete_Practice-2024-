
import './App.css';
import Alert from './Components/Alert';
// import About from './Components/About'
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'

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
      SetGreenC(null)
    }
    else {
      setmode({
        color: 'white',
        backgroundColor: '#343a40'
      })
      document.body.style.backgroundColor = '#012a4a';
      SetBtn('Dark Mode');
      ShowAlert('Success:', " Entered Dark Mode");
      SetGreenC(null)
    }
  }


  //For Green button
  const [greenC, SetGreenC] = useState(null)
  const GreenToggle = () => {
    if (greenC == null){

      SetGreenC({
        color: 'white',
        backgroundColor: '#70e000'
      })
      document.body.style.backgroundColor = '#007200';
      document.body.style.color = 'white';
    }
    else {
      SetGreenC(null)
      document.body.style.backgroundColor = 'white';
    }
  }



  return (
    <>
      <Navbar title="React JS" liText="Home" mode={mode} togglebutton={togglemode} btn={Btn} GreenButton={GreenToggle} green={greenC} />
      <Alert myAlert={myAlert} />
      <div className="container">
        <TextForm mode={mode} ShowAlert={ShowAlert} />
        {/* <About/> */}
      </div>
    </>

  );
}

export default App;
