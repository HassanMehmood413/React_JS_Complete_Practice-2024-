import React, { Component } from 'react'
import night from '../Components/svgs/night.svg'


export class Navbar extends Component {


  render() {
    return (
      <div className='navbar'>

        <div className="name">
          <p>News <span style={{ color: 'rgb(0, 180, 216)', fontSize: '25', margin: '5px', fontWeight: 'bold' }}>Monkey</span></p>
        </div>

        <div className='nav'>
          <ul>
            <li><a href="/about">Home</a></li>
            <li><a href="/about">Catagory</a></li>
            <li><a href="/about">sports</a></li>
            <li><a href="/about">science</a></li>
            <li><a href="/about">food</a></li>
            <li><a href="/about">About</a></li>
            <img src={night} alt="" />
          </ul>
        </div>

      </div>
    )
  }
}

export default Navbar

