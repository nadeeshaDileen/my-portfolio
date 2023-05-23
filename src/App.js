import React from 'react';
import './index.css';
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Project from './routes/Project';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <>
    <div><meta http-equiv="Permissions-Policy" content="interest-cohort=()">
     <Routes basename="/my-portfolio">
      <Route path='/' element={<Home/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </meta>
    </div>
    </>
  
  );
}

export default App;
