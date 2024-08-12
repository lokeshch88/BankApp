import React, { useEffect, useState } from 'react'
import './LoginSignup.css'
import Login from './Login'
import Navbar from './Navbar'


const Signup = () => {
  
  const [name, setName]=useState('');
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');

  const validate=()=>{
    
    if(password.length<6 ){
      alert("Password must be at least 6 characters")
      return false;
    }
    if(!/[A-Z]/.test(password)){
      alert("Password must contain at least one upper case letter")
      return false;
    }
    if(!/[!@#$%^&*()_+?"{}><]/.test(password)){
      alert("Password must contain at least one special case letter")
      return false;
      
    }
    localStorage.setItem('name', name)
    localStorage.setItem('email', email)
    localStorage.setItem('password', password)
    return true;
    // alert("Sign up successfully")
  }

  const handleSignup=(e)=>{
    // e.preventDefault();
    if(validate()){
      alert("signup successfully")
    }
   
    
  }
  return (
    <div>
      <Navbar/>
      <div className='container'>
        
        <div >
          <form className='inputs' onSubmit={handleSignup}>
          <div className='header'>
            <div className='text'><b>Sign Up</b></div>
        </div>
          <div className='input'>
                
              <input type='name'
              placeholder='Enter Name' 
              id='name' value={name}
              onChange={(e)=>setName(e.target.value)}
               required/>
            </div>
            <div className='input'>
                
              <input type='email' placeholder='Enter Email' id='email' value={email}
              onChange={(e)=>setEmail(e.target.value)} 
              required/>
            </div>
            <div className='input'>
               
              <input type='password' placeholder='Enter Password' id='password' value={password}
              onChange={(e)=>setPassword(e.target.value)}
              required/>
            </div>
            <div className='text2'>
              Already have an account <a href='/login'> login</a>
            </div>
            <div className='submit'>
            <div><button type='submit' >Sign up</button> </div> 
            </div>

          </form>
            
        </div>
        
     </div>

    </div>
     
    
  )
}

export default Signup
