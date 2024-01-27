import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Main = () => {
    const location = useLocation();
    const noNavabarFooter = location.pathname.includes("/register") || location.pathname.includes("/login")
    return (
        <div>
             { noNavabarFooter ||   <Navbar></Navbar>}
         <div className="">
         <Outlet></Outlet>  
         </div>
        </div>
    );
};

export default Main;