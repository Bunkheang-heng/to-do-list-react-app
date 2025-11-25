import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Settings from "./pages/Settings";

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
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] font-display transition-colors duration-300">
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
