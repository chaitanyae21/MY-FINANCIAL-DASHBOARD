import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

/**
 * Header component with navigation
 */
const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Navigation items
  const navItems = [
    { to: "/", label: "Dashboard" },
    { to: "/holdings", label: "Holdings" },
    { to: "/performance", label: "Performance" },
    { to: "/settings", label: "Settings" },
  ];

  return (
    <header className="bg-gray-800 shadow-md sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-teal-400 hover:text-teal-300 transition-colors">FinDash</Link>
        <nav className="hidden md:flex gap-6 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={clsx(
                "hover:text-teal-400 transition-colors",
                currentPath === item.to && "text-teal-400 border-b-2 border-teal-400 pb-1"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
