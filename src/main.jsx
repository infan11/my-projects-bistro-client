import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { router } from './Routes/Routes'
import {
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './Components/Provider/AuthProvider/AuthProvider';
import { HelmetProvider } from 'react-helmet-async';
import {
  QueryClient,
  QueryClientProvider,
 
} from '@tanstack/react-query';
// import { ReactQueryDevtools } from 'react-query/devtools';
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
      <HelmetProvider>
        <div className='md:max-w-7xl mx-auto'>
          <RouterProvider router={router} />
        </div>
      </HelmetProvider>
       </AuthProvider>
    </QueryClientProvider>
 
</React.StrictMode>,
document.getElementById('root')
)

