import React from "react";
import clsx from "clsx";

export const Card = ({ className, children, ...props }) => {
  return (
    <div
      className={clsx(
        "rounded-lg border border-gray-700 bg-gray-800 shadow",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ className, ...props }) => {
  return (
    <div
      className={clsx("flex flex-col space-y-1.5 p-6", className)}
      {...props}
    />
  );
};

export const CardTitle = ({ className, ...props }) => {
  return (
    <h3
      className={clsx(
        "text-lg font-semibold leading-none tracking-tight text-white",
        className
      )}
      {...props}
    />
  );
};

export const CardContent = ({ className, ...props }) => {
  return <div className={clsx("p-6 pt-0", className)} {...props} />;
};
