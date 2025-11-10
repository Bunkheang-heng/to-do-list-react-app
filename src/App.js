import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
//Import pages 
import Home from './pages/Home';
import Leading from './pages/Leading';
import Login from './pages/Login';
import Register from './pages/Register';

export default function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/leading" element={<Leading />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
   </Router>
  )
}
