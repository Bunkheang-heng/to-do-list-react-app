import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const FooterNav = () => {
  return (
    <footer className="footer">
      <i className="fas fa-mobile-alt"></i>

      {/* Navigation Links */}
      <Link to="/" style={{ margin: "0 10px" }}>
        Home
      </Link>

      <span>|</span>

      <Link to="/tasks" style={{ margin: "0 10px" }}>
        Tasks
      </Link>

      <span>|</span>

      <Link to="/setting" style={{ margin: "0 10px" }}>
        Settings
      </Link>
    </footer>
  );
};

export default FooterNav;
