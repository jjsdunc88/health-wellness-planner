import React from 'react'
import ReactDOM from 'react-dom/client'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// import Nav from './components/Nav'
import App from './App.jsx';
import HomePage from './pages/HomePage';
import Error from './pages/Error';
import SignupPage from './pages/SignupPage';
import NutritionPage from './pages/NutritionPage';
import LoginPage from './pages/LoginPage';
import LoginUpdatePage from './pages/LoginUpdatePage';
import PreviewPage from './pages/PreviewPage';
import ProfileDataPage from './pages/ProfileDataPage';


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
      },
      {
        path: '/profile',
        element: <ProfileDataPage />
      },
      {
        path: '/nutrition',
        element: <NutritionPage />
      },
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/updateprofile',
        element: <LoginUpdatePage />
      },
      {
        path: "/preview",
        element: <PreviewPage />
      }
      // {
      //   path: '/Nav',
      //   element: <Nav />
      // }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)