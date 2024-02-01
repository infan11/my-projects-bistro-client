import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { router } from './Routes/Routes'
import {
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './Components/Provider/AuthProvider/AuthProvider';
import { HelmetProvider } from 'react-helmet-async';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <HelmetProvider>
     <div className='md:max-w-7xl   mx-auto'>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
     </div>
     </HelmetProvider>
  </React.StrictMode>,
)

