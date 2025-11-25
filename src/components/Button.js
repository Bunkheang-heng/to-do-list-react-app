import React from 'react';

export default function Button({ 
  children, 
  onClick, 
  type = "button", 
  variant = "primary", 
  fullWidth = false,
  disabled = false 
}) {
  const getButtonStyle = () => {
    const baseStyle = {
      padding: "14px 28px",
      fontSize: "1em",
      fontWeight: 700,
      borderRadius: "12px",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "all 0.3s ease",
      border: "none",
      width: fullWidth ? "100%" : "auto",
      opacity: disabled ? 0.6 : 1,
    };

    if (variant === "primary") {
      return {
        ...baseStyle,
        background: "linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)",
        color: "white",
        boxShadow: "0 4px 15px rgba(255, 107, 53, 0.3)",
      };
    }

    if (variant === "secondary") {
      return {
        ...baseStyle,
        background: "white",
        color: "#ff6b35",
        border: "2px solid #ff6b35",
        boxShadow: "none",
      };
    }

    if (variant === "outline") {
      return {
        ...baseStyle,
        background: "transparent",
        color: "#2d3748",
        border: "2px solid #e2e8f0",
        boxShadow: "none",
      };
    }

    return baseStyle;
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={getButtonStyle()}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.transform = "translateY(-2px)";
          if (variant === "primary") {
            e.currentTarget.style.boxShadow = "0 6px 20px rgba(255, 107, 53, 0.4)";
          }
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.currentTarget.style.transform = "translateY(0)";
          if (variant === "primary") {
            e.currentTarget.style.boxShadow = "0 4px 15px rgba(255, 107, 53, 0.3)";
          }
        }
      }}
    >
      {children}
    </button>
  );
}
