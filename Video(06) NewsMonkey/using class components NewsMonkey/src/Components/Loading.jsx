import React, { Component } from 'react'
import spinner from './loading2.gif'
export class loading extends Component {
  render() {
    return (
      <div className='spinner'>
        <img src={spinner} alt="" />
      </div>
    )
  }
}

export default loading


