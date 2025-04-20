import React from "react";
import clsx from "clsx";

export const Button = ({ 
  children, 
  className, 
  variant = "default", 
  size = "default",
  type = "button",
  ...props 
}) => {
  return (
    <button
      type={type}
      className={clsx(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        // Handle variants
        variant === "default" && "bg-teal-600 text-white hover:bg-teal-700",
        variant === "destructive" && "bg-red-600 text-white hover:bg-red-700",
        variant === "secondary" && "bg-gray-700 text-white hover:bg-gray-600",
        variant === "ghost" && "bg-transparent hover:bg-gray-700 text-gray-300",
        // Handle sizes
        size === "default" && "h-10 px-4 py-2",
        size === "sm" && "h-8 px-3 text-sm",
        size === "lg" && "h-12 px-6",
        size === "icon" && "h-8 w-8",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
