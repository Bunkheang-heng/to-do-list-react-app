import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/image/logo/logo.png';

export default function AuthLayout({ children, title, subtitle }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #ff6b35 0%, #ff8c42 50%, #ffa726 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.97)",
          borderRadius: "24px",
          padding: "48px 40px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
          maxWidth: "450px",
          width: "100%",
        }}
      >
        {/* Logo and Title */}
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <Link to="/">
            <img
              src={logo}
              alt="LeadUp Logo"
              style={{
                width: "80px",
                height: "80px",
                marginBottom: "16px",
                objectFit: "contain",
                cursor: "pointer",
              }}
            />
          </Link>
          <h1
            style={{
              fontSize: "2em",
              fontWeight: 800,
              color: "#2d3748",
              marginBottom: "8px",
            }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              style={{
                fontSize: "1em",
                color: "#718096",
              }}
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* Form Content */}
        {children}
      </div>
    </div>
  );
}

