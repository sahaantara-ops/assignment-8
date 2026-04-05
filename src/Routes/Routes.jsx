import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider} from "react-router";
import Errorpage from '../pages/ErrorPage/ErrorPage';
import ProductDetails from '../pages/ProductDetails/ProductDetails';
import Installation from '../pages/Installation/Installation';


import Home from '../pages/Home/Home';


import MainLayout from '../components/MainLayout/MainLayout';
import Apps from '../pages/Apps/Apps';



 const router = createBrowserRouter([
  {
    path: "/",
   
    element:<MainLayout/>,
    errorElement: <Errorpage/>,
    hydrateFallbackElement:<p>Loading...</p>,
    children: [
        {
           index: true,
          //  loader:()=>fetch('/public/newAppData.json'),
           
           element: <Home />,
        },
    {
        path: '/apps',
        element: <Apps />,
    },
    {
        path: "/apps/:id", // Dynamic route for product details
        element: (
          <Suspense fallback={<p>Loading Product...</p>}>
            <ProductDetails />
          </Suspense>
        ),
      },
    {
        path: "/Readlist", // Matches the <Link to='Readlist'> in your Navbar
        element: <Installation  />,
      },
        
            
    ]
  },
]);
export default router