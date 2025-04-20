import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Footer component
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-6 text-center text-xs text-gray-400 space-x-4">
        <Link to="/privacy" className="hover:text-teal-400">Privacy Policy</Link>
        <span className="opacity-60">•</span>
        <Link to="/terms" className="hover:text-teal-400">Terms of Use</Link>
        <span className="opacity-60">•</span>
        <Link to="/faq" className="hover:text-teal-400">FAQ</Link>
        <p className="mt-2">© {currentYear} FinDash. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
