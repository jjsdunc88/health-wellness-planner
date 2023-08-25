import React from 'react'
import ReactDOM from 'react-dom/client'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import App from './App.jsx'
import HomePage from './pages/HomePage';
import Error from './pages/Error';
import SignupPage from './pages/SignupPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/signup',
        element: <SignupPage />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)