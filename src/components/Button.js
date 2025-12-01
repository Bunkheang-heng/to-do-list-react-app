import React from 'react';

export default function Button({ 
  children, 
  onClick, 
  type = "button", 
  variant = "primary", 
  size = "md",
  fullWidth = false,
  disabled = false,
  className = "",
  ...props
}) {
  const getVariantClasses = () => {
    switch (variant) {
      case "primary":
        return "bg-orange-500 hover:bg-orange-600 text-white";
      case "secondary":
        return "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700";
      case "danger":
        return "bg-red-500 hover:bg-red-600 text-white";
      case "outline":
        return "bg-transparent text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800";
      default:
        return "bg-orange-500 hover:bg-orange-600 text-white";
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "px-3 py-1.5 text-xs";
      case "md":
        return "px-4 py-2.5 text-sm";
      case "lg":
        return "px-6 py-3 text-base";
      default:
        return "px-4 py-2.5 text-sm";
    }
  };

  const baseClasses = `
    rounded-lg 
    font-medium 
    transition-colors 
    flex 
    items-center 
    justify-center 
    gap-2
    ${fullWidth ? "w-full" : ""}
    ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
  `;

  const variantClasses = getVariantClasses();
  const sizeClasses = getSizeClasses();

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}
