import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

const App =()=>{
  return(
      <BrowserRouter>
          <Routes>
              <Route index element={<Home />} />
              <Route path="/" element={<Home />}/>
              <Route path="/home" element={<Home />}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/dashboard" element={<Dashboard />}/>
          </Routes>
      </BrowserRouter>
  )
}


export default App;
