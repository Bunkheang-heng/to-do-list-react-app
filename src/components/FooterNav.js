import React from "react";
import { Link, useLocation } from "react-router-dom";

const FooterNav = () => {
  const { pathname } = useLocation();

  const linkStyle = (r) =>
    `flex flex-col items-center text-xs font-medium transition-colors duration-300 ${
      pathname === r ? "text-accent" : "text-[var(--color-subtle)]"
    }`;

  return (
    <footer
      className="
        fixed bottom-0 left-0 right-0
        bg-[var(--color-box-bg)]
        border-t border-[var(--color-box-bg)]
        shadow-lg
        py-3
        transition-colors duration-300
      "
    >
      <nav className="flex justify-around max-w-4xl mx-auto">
        <Link to="/home" className={linkStyle("/home")}>
          <i className="fas fa-home text-lg" />
          <span>Home</span>
        </Link>

        <Link to="/task" className={linkStyle("/task")}>
          <i className="fas fa-list text-lg" />
          <span>Tasks</span>
        </Link>

        <Link to="/profile" className={linkStyle("/profile")}>
          <i className="fas fa-cog text-lg" />
          <span>Profile</span>
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
