import React from 'react';

export default function FormInput({ 
  label, 
  type = "text", 
  name,
  placeholder, 
  value, 
  onChange, 
  required = false,
  icon 
}) {
  return (
    <div style={{ marginBottom: "20px", width: "100%" }}>
      {label && (
        <label
          style={{
            display: "block",
            marginBottom: "8px",
            color: "#2d3748",
            fontWeight: 600,
            fontSize: "0.95em",
          }}
        >
          {label} {required && <span style={{ color: "#ff6b35" }}>*</span>}
        </label>
      )}
      <div style={{ position: "relative" }}>
        {icon && (
          <div
            style={{
              position: "absolute",
              left: "16px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#718096",
              fontSize: "1.1em",
            }}
          >
            {icon}
          </div>
        )}
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          style={{
            width: "100%",
            padding: icon ? "14px 16px 14px 48px" : "14px 16px",
            fontSize: "1em",
            border: "2px solid #e2e8f0",
            borderRadius: "12px",
            outline: "none",
            transition: "all 0.3s ease",
            backgroundColor: "white",
          }}
          onFocus={(e) => {
            e.target.style.borderColor = "#ff6b35";
            e.target.style.boxShadow = "0 0 0 3px rgba(255, 107, 53, 0.1)";
          }}
          onBlur={(e) => {
            e.target.style.borderColor = "#e2e8f0";
            e.target.style.boxShadow = "none";
          }}
        />
      </div>
    </div>
  );
}

