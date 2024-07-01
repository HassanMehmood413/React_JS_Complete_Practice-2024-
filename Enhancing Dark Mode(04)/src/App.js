
import './App.css';
// import About from './Components/About'
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'

function App() {
  //For button toggle

  const [mode, setmode] = useState({
    color: 'black',
    backgroundColor: '#d9d9d9'
  })
  const [Btn, SetBtn] = useState("light Mode")

  const togglemode = () => {
    if (mode.color == 'white') {
      setmode({
        color: 'black',
        backgroundColor: '#d9d9d9'
      })
      document.body.style.backgroundColor = 'white';
      SetBtn('light Mode')
    }
    else {
      setmode({
        color: 'white',
        backgroundColor: '#343a40'
      })
      document.body.style.backgroundColor = '#012a4a';
      SetBtn('Dark Mode')
    }
  }




  return (
    <>
      <Navbar title="React JS" liText="Home" mode={mode} togglebutton={togglemode} btn={Btn} />
      <div className="container">
        <TextForm mode={mode}/>
        {/* <About/> */}
      </div>
    </>

  );
}

export default App;
