import React, { useEffect, useState } from 'react'
import './LoginSignup.css'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const [storedEmail, setStoredEmail]=useState('')
  const [storedPassword, setStoredPassword]=useState('')
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const navigate=useNavigate();

  const handleLogin=()=>{
    // if(!email || !password){
    //   alert("email or password cannot be blank")
    // }
    if(!email===storedEmail && !password===storedPassword){
     
      alert("wrong credentials entered")
    }
    else{
    navigate('/welcome')
  }
    

  }
  useEffect(()=>{
    const email=localStorage.getItem('email')
    const password=localStorage.getItem('password')
    setStoredEmail(email ||'')
    setStoredPassword(password||'')
  }


  )
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
             Don't have an account <a href='/signup'>signup</a>
            </div>
            <div className='text2'>
              <a href='/signup'>Forgot password?</a>
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
