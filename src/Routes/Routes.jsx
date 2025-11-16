import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider} from "react-router";
import Errorpage from '../pages/ErrorPage/ErrorPage';


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
      
    },
    
        
            
    ]
  },
]);
export default router