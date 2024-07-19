// React
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
// Components
import Label from '../components/HtmlComponents/Label/Label'
// Pages
import Login from '../pages/Login/Login'
import CreateAccount from '../pages/CreateAccount/CreateAccount'
import HomeSreenController from '../pages/HomeScreenController/HomeScreenController'
import Home from '../pages/Home/Home'
import Enroll from '../pages/Enroll/Enroll'
import Report from '../pages/Report/Report'
import Settings from '../pages/Settings/Settings'

/**
@component React Router component for managing the application's routes.
@return {JSX.Element}
*/
const Router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>,
    errorElement: <Label>Error</Label>
  },
  {
    path: '/create-account',
    element: <CreateAccount/>,
    errorElement: <Label>Error</Label>
  },
  {
    path: '/home',
    element: <HomeSreenController/>,
    errorElement: <Label>Error</Label>,
    children: [
      {
        path: '',
        element: <Home/>,
        errorElement: <Label>Error</Label>,
      },
      {
        path: 'enrolls',
        element: <Enroll/>,
        errorElement: <Label>Error</Label>,
      },
      {
        path: 'reports',
        element: <Report/>,
        errorElement: <Label>Error</Label>,
      },
      {
        path: 'config',
        element: <Settings/>,
        errorElement: <Label>Error</Label>,
      }
    ]
  },
  {/*
    path: '/reset-password',
    element: <ResetPassword/>,
    errorElement: <Label>Error</Label>
  },
  {
    path: '/home',
    element: <HomeSreenController/>,
    errorElement: <Label>Error</Label>,
    children: [
      {
        path: '',
        element: <Home/>,
        errorElement: <Label>Error</Label>,
      },
      {
        path: 'orders',
        element: <Orders/>,
        errorElement: <Label>Error</Label>,
      },
      {
        path: 'orders/description',
        element: <OrderDescription/>,
        errorElement: <Label>Error</Label>,
      }
    ]
  */}
])

export default Router
