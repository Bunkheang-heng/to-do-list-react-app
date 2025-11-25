import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
//Import pages 
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Task from "./pages/Task";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import Leading from "./pages/Leading";

export default function App() {
  return (
   <Router>
    <Routes>
      {/* Routes with Sidebar */}
      <Route element={<Layout />}>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/task" element={<Task />} />
        <Route path="/setting" element={<Settings />} />
        
      </Route>
      
      {/* Routes without Sidebar */}
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Leading />} />
    </Routes>
   </Router>
  )
}
