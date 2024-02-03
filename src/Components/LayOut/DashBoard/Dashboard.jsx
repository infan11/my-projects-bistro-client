import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const navLinks = <>
   <NavLink to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "font-bold  flex items-center gap-2 text-yellow-400 " : ""
  }
>
HOME
         
  </NavLink> 
   <NavLink to="/ourMenu"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "font-bold  flex items-center gap-2 text-yellow-400 " : ""
  }
>
OURMENU
         
  </NavLink> 
    <NavLink to="/dashboard/cart"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "font-bold  flex items-center gap-2 text-yellow-400 " : ""
  }
>
CART 
         
  </NavLink>
  
  </>
    return (
        <div>
             <Helmet>
        <title className="">Bistro Boss | Dashboard</title>
      </Helmet>
        <div className="md:max-w-7xl mx-auto" >
        <div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="w-full navbar bg-[#05050551]">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div className="flex-1 px-2 mx-2">Dashboard</div>
      <div className="navbar-center  hidden lg:flex">
    <ul className="menu menu-horizontal gap-10   text-white font-bold ">
      {navLinks}
    </ul>
  </div>
    </div>
    {/* Page content here */}
    <Outlet></Outlet>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-[#05050551] text-white ">
      {/* Sidebar content here */}
      <h2></h2>
      {navLinks}
    </ul>
  </div>
</div>
        </div>

        </div>
    );
};

export default Dashboard;