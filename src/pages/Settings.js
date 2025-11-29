import React, { useState } from "react";
import FooterNav from "../components/FooterNav";

const Settings = () => {
  // Pull current theme from HTML class
  const initialTheme = document.documentElement.classList.contains("dark")
    ? "dark"
    : "light";

  const [theme, setTheme] = useState(initialTheme);

  const handleThemeChange = (e) => {
    const value = e.target.value;
    setTheme(value);
    const isDark = value === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", value);
  };

  return (
    <section className="flex flex-col gap-6">

      {/* PAGE TITLE */}
      <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-text)] flex items-center gap-2">
        Settings
        <i className="fas fa-cog" />
      </h2>

      {/* OUTER WRAPPER */}
      <div
        className="
          bg-[var(--color-box-bg)]
          text-[var(--color-text)]
          rounded-[var(--radius-card)]
          shadow-md
          p-6
          flex flex-col gap-6
        "
      >

        {/* PROFILE HEADER BLOCK */}
        <div
          className="
            w-full
            bg-[#5865F2]        /* placeholder purple-blue header */
            rounded-[var(--radius-card)]
            text-white
            p-6
            flex justify-between items-center
          "
        >
          {/* Left side info */}
          <div className="flex items-center gap-4">
            <div
              className="
                w-16 h-16 rounded-full
                bg-white/20
                flex items-center justify-center
                text-3xl
              "
            >
              <i className="fas fa-user" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">TESING</h3>
              <p className="opacity-90">testing@example.com</p>
              <p className="opacity-80 text-sm flex items-center gap-1">
                <i className="fas fa-clock text-sm"></i>
                Member since Nov 2025
              </p>
            </div>
          </div>

          {/* Log out button */}
          <button
            className="
              bg-white text-[#5865F2] font-semibold
              px-4 py-2 rounded-lg shadow
              hover:bg-gray-100 transition
            "
          >
            <i className="fas fa-sign-out-alt mr-1"></i> Log Out
          </button>
        </div>

        {/* --- THREE SMALL CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* PROFILE CARD */}
          <div
            className="
              bg-[var(--color-box-bg)]
              border border-[var(--color-bg-alt)]
              rounded-[var(--radius-card)]
              shadow-sm
              p-4
            "
          >
            <h4 className="font-semibold flex items-center gap-2 mb-2">
              <i className="fas fa-user"></i> Profile
            </h4>
            <p className="text-[var(--color-subtle)]">
              Waiting for login implementation
            </p>
          </div>

          {/* THEME CARD */}
          <div
            className="
              bg-[var(--color-box-bg)]
              border border-[var(--color-bg-alt)]
              rounded-[var(--radius-card)]
              shadow-sm
              p-4
            "
          >
            <h4 className="font-semibold flex items-center gap-2 mb-2">
              <i className="fas fa-palette"></i> Theme
            </h4>

            <select
              value={theme}
              onChange={handleThemeChange}
              className="
                bg-[var(--color-bg)]
                text-[var(--color-text)]
                border border-[var(--color-bg-alt)]
                rounded-[var(--radius-btn)]
                px-3 py-2
                w-full
              "
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>

          {/* NOTIFICATIONS CARD */}
          <div
            className="
              bg-[var(--color-box-bg)]
              border border-[var(--color-bg-alt)]
              rounded-[var(--radius-card)]
              shadow-sm
              p-4
            "
          >
            <h4 className="font-semibold flex items-center gap-2 mb-2">
              <i className="fas fa-bell"></i> Notifications
            </h4>
            <p className="text-[var(--color-subtle)]">N/A</p>
          </div>
        </div>

        {/* --- DANGER ZONE --- */}
        <div
          className="
            border border-red-400
            bg-red-50 dark:bg-red-950/40
            text-red-600 dark:text-red-400
            rounded-[var(--radius-card)]
            p-4
          "
        >
          <h4 className="font-semibold flex items-center gap-2 mb-1">
            <i className="fas fa-exclamation-triangle"></i>
            Danger Zone
          </h4>
          <p>Delete your account permanently</p>
        </div>

      </div>

      <FooterNav />
    </section>
  );
};

export default Settings;
