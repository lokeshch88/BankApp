import React from 'react'
import Navbar from './Navbar'
import './Welcome.css'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {
  const username = localStorage.getItem('username') || 'Guest';
    const navigate=useNavigate();
    const handleLogout=()=>{
    navigate('/login');
}
  return (
    <div>
        <Navbar/>
        <div className='welcome'>
        <h1 >Welcome, {username}</h1>
        <button onClick={handleLogout}>Log out</button>
        </div>
      
    </div>
  )
}

export default Welcome
