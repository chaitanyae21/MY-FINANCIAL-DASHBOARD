import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import FinancialDashboard from '../pages/FinancialDashboard';
import PerformancePage from '../pages/Performance/PerformancePage';
import HoldingsPage from '../pages/Holdings/HoldingsPage';
import SettingsPage from '../pages/Settings/SettingsPage';

// Centralized route configuration
const routes = createBrowserRouter([
  {
    path: '/',
    element: <FinancialDashboard />,
  },
  {
    path: '/performance',
    element: <PerformancePage />,
  },
  {
    path: '/holdings',
    element: <HoldingsPage />,
  },
  {
    path: '/settings',
    element: <SettingsPage />,
  },
  // Add more routes as needed
]);

export default routes;
