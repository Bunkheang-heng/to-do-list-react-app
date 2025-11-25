import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text font-display dark:bg-bg dark:text-text">
      <Router>
        <div className="mx-auto max-w-4xl px-4 pb-24 pt-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/setting" element={<Settings />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
