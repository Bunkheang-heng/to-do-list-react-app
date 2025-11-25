import React from "react";
import FooterNav from "../components/FooterNav";

const Settings = () => {

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-2xl font-semibold tracking-tight text-accent">
        <i className="fas fa-cog mr-2" /> Settings
      </h2>

      <button onClick={toggleTheme} className="rounded-[var(--radius-btn)] border border-slate-300 dark:border-slate-600 px-3 py-1.5 text-sm">
        Toggle Dark Mode
      </button>

      <div className="p-4 bg-bg text-text">Test</div>


      <FooterNav />
    </section>
  );
};
export default Settings;
