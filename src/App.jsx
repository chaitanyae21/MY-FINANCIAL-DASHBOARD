import React from 'react'
import { RouterProvider } from 'react-router-dom'
import './App.css'
import routes from './routes/routes'

function App() {
  return <RouterProvider router={routes} />;
}

export default App
