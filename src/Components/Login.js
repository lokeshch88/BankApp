import React, { useEffect, useState } from 'react'
import './LoginSignup.css'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
 
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [username,setUsername]=useState('');

  const navigate=useNavigate();

  const handleLogin= async (e)=>{
    e.preventDefault();
    try {
      const response = await axios.post('http://192.168.0.78:8080/users/login', {
        email: email,
        password: password
      });
     localStorage.setItem(username, response.data.name)
      navigate("/welcome")
  }
  catch{
    alert("wrong login credentials")

  }
    
  }
 
  
  return (
    
    <div>
      <Navbar/>
      <div className='container'>
      
          <div >
        
          <form className='inputs' onSubmit={handleLogin}>
          <div className='header'>
            <div className='text'><b>Log in</b></div>
        </div>

            <div className='input'>
               
              <input type='email' id='email' placeholder='Enter Email' value={email}
              onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className='input'>
                
              <input type='password' id='password' placeholder='Enter Password' value={password}
              onChange={(e)=>setPassword(e.target.value)} />
        
            </div>
            <div className='text2'>
             Don't have an account <a href='/signup'>Signup</a>
            </div>
            <div className='text2'>
              <a href='/forgotpasword' >Forgot password?</a>
            </div>
            <div className='submit'>
            <div> <button type='submit'>Log in</button></div>

        </div>


        
          </form>
            
        </div>
        </div> 
     
     
    </div>
  )
}

export default Login
