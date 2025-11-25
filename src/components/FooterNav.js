import React from "react";
import { Link, useLocation } from "react-router-dom";

const FooterNav = () => {
  const { pathname } = useLocation();

  const linkStyle = (route) =>
    `flex flex-col items-center text-xs font-medium ${
      pathname === route ? "text-accent" : "text-slate-500"
    }`;

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-lg py-3">
      <nav className="flex justify-around max-w-4xl mx-auto">
        <Link to="/" className={linkStyle("/")}>
          <i className="fas fa-home text-lg" />
          <span>Home</span>
        </Link>

        <Link to="/tasks" className={linkStyle("/tasks")}>
          <i className="fas fa-list text-lg" />
          <span>Tasks</span>
        </Link>

        <Link to="/setting" className={linkStyle("/setting")}>
          <i className="fas fa-cog text-lg" />
          <span>Settings</span>
        </Link>
      </nav>
    </footer>
  );
};

export default FooterNav;
