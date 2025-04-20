import React from 'react';
import Header from './Header';
import Footer from './Footer';

/**
 * Layout component that wraps all pages with consistent header and footer
 */
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
