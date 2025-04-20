import React, { useState, useRef, useEffect } from "react";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";

export const Select = ({ children, value, onValueChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div className="relative" ref={ref}>
      {React.Children.map(children, (child) => {
        if (child.type === SelectTrigger) {
          return React.cloneElement(child, {
            onClick: () => setOpen(!open),
            open,
            value,
          });
        }
        if (child.type === SelectContent) {
          return open
            ? React.cloneElement(child, {
                onValueChange: (val) => {
                  onValueChange(val);
                  setOpen(false);
                },
                value,
              })
            : null;
        }
        return child;
      })}
    </div>
  );
};

export const SelectTrigger = ({ children, className, open, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "flex h-10 w-full items-center justify-between rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500",
        className
      )}
    >
      {children}
      <ChevronDown
        size={16}
        className={clsx("transition-transform", open && "rotate-180")}
      />
    </button>
  );
};

export const SelectValue = ({ placeholder, children }) => {
  return <span>{children || placeholder}</span>;
};

export const SelectContent = ({ children, className, onValueChange, value }) => {
  return (
    <div
      className={clsx(
        "absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border border-gray-700 bg-gray-800 shadow-lg",
        className
      )}
    >
      <div className="p-1">
        {React.Children.map(children, (child) => {
          if (child.type === SelectItem) {
            return React.cloneElement(child, {
              onSelect: () => onValueChange(child.props.value),
              selected: value === child.props.value,
            });
          }
          return child;
        })}
      </div>
    </div>
  );
};

export const SelectItem = ({ children, className, value, onSelect, selected }) => {
  return (
    <div
      onClick={onSelect}
      className={clsx(
        "relative flex cursor-pointer select-none items-center rounded-sm py-1.5 px-2 text-sm outline-none transition-colors hover:bg-gray-700",
        selected && "bg-teal-900/50 text-teal-300",
        className
      )}
    >
      {children}
    </div>
  );
};
