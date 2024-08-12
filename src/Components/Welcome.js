import React from 'react'
import Navbar from './Navbar'
import './Welcome.css'

const Welcome = () => {

  return (
    <div>
        <Navbar/>
        <div className='welcome'>
        <h1 >Welcome</h1>
        <button>Log out</button>
        </div>
      
    </div>
  )
}

export default Welcome
