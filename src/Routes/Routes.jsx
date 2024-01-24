import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Home from "../Components/LayOut/Home/Home/Home";
import Main from "../Components/LayOut/Main/Main";
import Contactus from "../Components/LayOut/ContactUs/Contactus";
import Dashboard from "../Components/LayOut/DashBoard/Dashboard";
import OurMenu from "../Components/LayOut/OurMenu/OurMenu";
import OurShop from "../Components/LayOut/OurShop/OurShop";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      // to do error element
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path:"/contactUs",
          element:<Contactus></Contactus>
        },
        {
          path:"/dashboard",
          element:<Dashboard></Dashboard>
        },
        {
         path:"/ourMenu",
         element: <OurMenu></OurMenu>
        },
        {
          path:"ourShop",
          element: <OurShop></OurShop>
        }
      ]
    },
  ]);