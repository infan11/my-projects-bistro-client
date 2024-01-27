import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Main = () => {
    const location = useLocation();
    const noNavabarFooter = location.pathname.includes("/register") || location.pathname.includes("/login")
    return (
        <div>
             { noNavabarFooter ||   <Navbar></Navbar>}
         <Outlet></Outlet>  
      { noNavabarFooter ||    <Footer></Footer>}
        </div>
    );
};

export default Main;