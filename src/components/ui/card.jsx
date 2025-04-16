// src/components/ui/card.jsx
import React from "react";
import { cn } from "@/lib/utils"; // or where you keep utility functions

export function Card({ className, children, ...props }) {
  return (
    <div className={cn("rounded-2xl shadow p-4", className)} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className }) {
  return <div className={cn("mb-2", className)}>{children}</div>;
}

export function CardTitle({ children, className }) {
  return <h2 className={cn("text-xl font-bold", className)}>{children}</h2>;
}

export function CardContent({ children, className }) {
  return <div className={cn("", className)}>{children}</div>;
}
