
import React, { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import News from './Components/News'
import LoadingBar from 'react-top-loading-bar'

const App = (props) => {
 const apikey = import.meta.env.VITE_Full_API_KEY


  // All usestates define 

  const [mode, setmode] = useState({
    color: 'black',
    backgroundColor: '#e5e5e5'
  })
  
  const [full, setfull] = useState({
    // backgroundColor: document.body.style.backgroundColor = "white",
    color: document.body.style.color = "black"
  })


  //Usestates Ends


  const modechange = () => {
    if (mode.color == 'black') {
      setmode({
        color: '#e9ecef',
        background: 'rgb(149 149 149)',
      })
      setfull({
        // backgroundColor: document.body.style.backgroundColor = "#495057",
        color: document.body.style.color = "white"
      })
      document.body.style.backgroundColor = "#495057"
    }


    else if (mode.color == '#e9ecef') {
      setmode({
        color: 'black',
        backgroundColor: '#e5e5e5'
      })
      setfull({
        // backgroundColor: document.body.style.backgroundColor = "white",
        color: document.body.style.color = "black"
      })
      document.body.style.backgroundColor = "white"
    }

  }

  const [progress, setprogress] = useState(0)





    return (
      <div>
        <Navbar modechange={modechange} mode={mode} />
        <LoadingBar
          height={4}
          color='#f11946'
          progress={progress}

        />
        <News full={full} pageSize={5} country={'us'} category='science' totalResults={70} setprogress={setprogress} apikey={apikey} />
      </div>
    )

}

export default App
