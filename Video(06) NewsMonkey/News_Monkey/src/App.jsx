
import React, { Component } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import News from './Components/News'

export class App extends Component {
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
      }
    }

  }


  render() {
    return (
      <div>
        <Navbar modechange={this.modechange} mode={this.state.mode} />
        <News btnclr = {this.state.btnclr} full={this.state.full} pageSize={5} country={'us'} category='science' totalResults = {70} />
      </div>
    )
  }
}

export default App
