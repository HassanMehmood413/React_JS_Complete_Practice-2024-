
import React, { Component } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import News from './Components/News'
import LoadingBar from 'react-top-loading-bar'

export class App extends Component {
  apikey = import.meta.env.VITE_Full_API_KEY


  modechange = () => {
    if(this.state.mode.color == 'black'){
      this.setState({
        mode: {
          color: '#e9ecef',
        background: 'rgb(149 149 149)',
      },
      full: {
        // backgroundColor: document.body.style.backgroundColor = "#495057",
        color: document.body.style.color = "white"
      },
      btnclr:{
        background:'white',
        color:'black'
      }
    })
    document.body.style.backgroundColor = "#495057"
  }
  else if(this.state.mode.color == '#e9ecef'){
    this.setState({
      mode: {
        color: 'black',
        backgroundColor: '#e5e5e5'
      },
      full: {
        // backgroundColor: document.body.style.backgroundColor = "white",
        color: document.body.style.color = "black"
      },
      btnclr:{
        background:'grey',
        color:'white'
      }
    })
    document.body.style.backgroundColor = "white"
  }

  }

  constructor() {
    super();
    this.state = {
      mode: {
        color: 'black',
        backgroundColor: '#e5e5e5'
      },
      full: {
        backgroundColor: document.body.style.backgroundColor = "white",
        color: document.body.style.color = "black"
      },
      btnclr:{
        background:'grey',
        color:'white'
      },
    }

  }

state = {
  progress : 0
}
setprogress = (progress)=>{
  this.setState({
    progress: progress
  })
}


  render() {
    return (
      <div>
        <Navbar modechange={this.modechange} mode={this.state.mode} />
        <LoadingBar
        height={4}
        color='#f11946'
        progress={this.state.progress}
        
        />
        <News btnclr = {this.state.btnclr} full={this.state.full} pageSize={5} country={'us'} category='science' totalResults = {70} setprogress ={this.setprogress} apikey = {this.apikey}/>
      </div>
    )
  }
}

export default App
