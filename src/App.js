import React, { useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//Import pages 
import Settings from "./pages/Settings";
import Task from "./pages/Task";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import Leading from "./pages/Leading";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";
import Register from "./pages/auth/Register";
import Profile from './pages/Profile';

export default function App() {
  useEffect(() => {
    // 1. Load saved theme
    const saved = localStorage.getItem("theme");

    if (saved === "dark") {
      document.documentElement.classList.add("dark");
    } else if (saved === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      // 2. First-time users → follow system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) document.documentElement.classList.add("dark");
    }
  }, []);

  return (
   <Router>
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    <Routes>
      {/* Routes with Sidebar */}
      <Route element={<Layout />}>
        <Route path="/task" element={<Task />} />
        <Route path="/setting" element={<Settings />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      
      {/* Routes without Sidebar */}
      <Route path="/" element={<Leading />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
   </Router>
  )
}
