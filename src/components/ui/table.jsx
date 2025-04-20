import React from "react";
import clsx from "clsx";

export const Table = React.forwardRef(({ className, ...props }, ref) => (
  <div className="w-full overflow-auto">
    <table
      ref={ref}
      className={clsx("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
));

export const TableHeader = React.forwardRef(({ className, ...props }, ref) => (
  <thead ref={ref} className={clsx("bg-gray-800", className)} {...props} />
));

export const TableBody = React.forwardRef(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={clsx("divide-y divide-gray-700", className)}
    {...props}
  />
));

export const TableRow = React.forwardRef(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={clsx(
      "border-b border-gray-700 transition-colors hover:bg-gray-800/50",
      className
    )}
    {...props}
  />
));

export const TableHead = React.forwardRef(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={clsx(
      "h-12 px-4 text-left align-middle font-medium text-gray-400",
      className
    )}
    {...props}
  />
));

export const TableCell = React.forwardRef(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={clsx("p-4 align-middle text-white", className)}
    {...props}
  />
));
