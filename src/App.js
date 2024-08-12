
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';

import Signup from './Components/Signup';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Welcome from './Components/Welcome';

function App() {
  return (
    <div >
     
      <Router>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/welcome" element={<Welcome/>}/>

       </Routes>
      </Router>
      
    
    </div>
  );
}

export default App;
