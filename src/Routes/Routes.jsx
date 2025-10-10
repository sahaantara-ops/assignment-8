import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider} from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';


import install from '../pages/Install/install';
import AppDetails from '../components/AppDetails/AppDetails';
import AllApps from '../pages/AllApps/AllApps';



export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
        {
           index: true,
           loader:()=>fetch('/public/appData.json'),
           path: '/',
           Component:Home
        },
        

    {
        path:'/Install',
        Component:install
    },
    {
        path:'/AppDetails/:id',
        
        loader:()=>fetch('/public/appData.json'),
        Component:AppDetails
    },
    {
      path:'/AllApps',
      Component:AllApps,
      
    }
        
            
    ]
  },
]);