import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Home from "../Components/LayOut/Home/Home/Home";
import Main from "../Components/LayOut/Main/Main";
import Contactus from "../Components/LayOut/ContactUs/Contactus";
import Dashboard from "../Components/LayOut/DashBoard/Dashboard";
import OurMenu from "../Components/LayOut/OurMenu/OurMenu";
import OurShop from "../Components/LayOut/OurShop/OurShop";
import Login from "../Components/LayOut/verifyAuth/Login/Login";
import Register from "../Components/LayOut/verifyAuth/Register/Register";
import PrivateRoute from "./PrivateRoutes/PrivateRoute";
import Cart from "../Components/LayOut/DashBoard/Cart/Cart";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      // to do error element
      children: [
        {
            path: "/",
            element:<Home></Home>
        },
        {
           path: "/login",
           element: <Login></Login>
        },
        {
           path: "/register",
           element: <Register></Register>
        },
        {
          path:"/contactUs",
          element:<Contactus></Contactus>
        },
        
        {
         path:"/ourMenu",
         element: <OurMenu></OurMenu>
        },
        {
          path:"/ourShop",
          element: <OurShop></OurShop>
        }
      ]
      
    },
    {
      path:"/dashboard",
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children : [
        {
          path: "/dashboard/cart",
          element: <Cart></Cart>
        }
      ]
    },
  ]);