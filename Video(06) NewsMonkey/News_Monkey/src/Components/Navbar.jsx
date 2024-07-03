import React, { Component } from 'react'
import night from '../Components/svgs/night.svg'


export class Navbar extends Component {
  render() {
    let {mode} = this.props
    let {modechange} = this.props
    return (
      <div className='navbar' style={mode}>

        <div className="name">
          <p>News <span style={{ color: 'rgb(0, 180, 216)', fontSize: '25', margin: '5px', fontWeight: 'bold' }}>Monkey</span></p>
        </div>

        <div className='nav'>
          <ul>
            <li><a  style={mode}  href="/about">Home</a></li>
            <li><a  style={mode} href="/about">Catagory</a></li>
            <li><a  style={mode} href="/about">sports</a></li>
            <li><a  style={mode} href="/about">science</a></li>
            <li><a  style={mode} href="/about">food</a></li>
            <li><a  style={mode} href="/about">About</a></li>
            <img onClick={modechange} src={night} alt="" />
          </ul>
        </div>

      </div>
    )
  }
}

export default Navbar

