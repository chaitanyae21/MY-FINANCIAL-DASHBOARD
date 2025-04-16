// src/components/ui/button.jsx
import React from "react";
import { cn } from "@/lib/utils";

export function Button({ variant = "default", className, children, ...props }) {
  const baseClasses = "px-3 py-1.5 rounded-2xl font-medium transition";
  const variantStyles =
    variant === "default"
      ? "bg-green-600 hover:bg-green-700 text-white"
      : "bg-transparent text-gray-300 border border-gray-600 hover:border-gray-500";

  return (
    <button className={cn(baseClasses, variantStyles, className)} {...props}>
      {children}
    </button>
  );
}
