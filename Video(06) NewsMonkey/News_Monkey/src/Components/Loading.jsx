import React, { Component } from 'react'
import spinner from './loading2.gif'
const loading = () => {
  return (
    <div className='spinner'>
      <img src={spinner} alt="" />
    </div>
  )
}

export default loading


