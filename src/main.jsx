import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './Components/Shop/Shop';
import Home from './Components/Layout/Home';
import Order from './Components/Order/Order';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children : [
      {
        path: "/",
        element:<Shop/> 
      },
      {
        path: "/Order",
        element:<Order /> 
      },
      {
        path: "/Inventory",
        element:<Inventory /> 
      },
      {
        path: "/Login",
        element:<Login /> 
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
