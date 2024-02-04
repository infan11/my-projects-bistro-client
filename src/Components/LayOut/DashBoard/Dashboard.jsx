import { Helmet } from "react-helmet-async";
import { FaAd, FaHome, FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaBook, FaCalendar, FaEnvelope, FaList, FaUsers, FaUtensils } from "react-icons/fa6";
import { QueryClient, QueryClientProvider } from "react-query";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
  const isAdmin = true ;
  const navLinks = <>

    {
      isAdmin ? <>
        <li>
          <NavLink className={ " hover:bg-slate-950 " } to="/dashboard/adminHome">
            <FaHome></FaHome>
            Admin Home</NavLink>
        </li>
        <li>
          <NavLink  className={"hover:bg-slate-950"} to="/dashboard/addItems">
            <FaUtensils></FaUtensils>
            Add Items</NavLink>
        </li>
        <li>
          <NavLink  className={"hover:bg-slate-950"}  to="/dashboard/manageItems">
            <FaList></FaList>
            Manage Items</NavLink>
        </li>
        <li>
          <NavLink  className={"hover:bg-slate-950"} to="/dashboard/bookings">
            <FaBook></FaBook>
            Manage Bookings</NavLink>
        </li>
        <li>
          <NavLink  className={"hover:bg-slate-950"} to="/dashboard/users">
            <FaUsers></FaUsers>
            All Users</NavLink>
        </li>
      </>
        :
        <>
          <li>
            <NavLink  className={"hover:bg-slate-950"}  to="/dashboard/userHome">
              <FaHome></FaHome>
              User Home</NavLink>
          </li>
          <li>
            <NavLink  className={"hover:bg-slate-950"} to="/dashboard/history">
              <FaCalendar></FaCalendar>
              Not History</NavLink>
          </li>
          <li>
            <NavLink  className={"hover:bg-slate-950"}  to="/dashboard/cart">
              
              <FaShoppingCart></FaShoppingCart>
             </NavLink>
          </li>
          <li>
            <NavLink  className={"hover:bg-slate-950"} to="/dashboard/review">
              <FaAd></FaAd>
              Add a Review</NavLink>
          </li>
          <li>
            <NavLink  className={"hover:bg-slate-950"} to="/dashboard/paymentHistory">
              <FaList></FaList>
              Real Payment History</NavLink>
          </li>
        </>
    }
    {/* shared nav links */}
    <div className="divider"></div>
    <li>
      <NavLink  className={"hover:bg-slate-950"} to="/">
        <FaHome></FaHome>
        Home</NavLink>
    </li>
    <li>
      <NavLink  className={"hover:bg-slate-950"} to="/ourMenu">
        <FaSearch></FaSearch>
        Menu</NavLink>
    </li>
    <li>
      <NavLink   className={"hover:bg-slate-950"} to="/order/contactUs">
        <FaEnvelope></FaEnvelope>
        Contact</NavLink>
    </li>
  </>
  return (
    <QueryClientProvider client={new QueryClient()}>
    <div>
      <Helmet>
        <title className="">Bistro Boss | Dashboard</title>
      </Helmet>
      <div>
      
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
                <ul className="menu menu-horizontal gap-2   text-white font-bold ">
                  {navLinks}
                </ul>
              </div>
            </div>
            {/* Page content here */}
         <Outlet></Outlet>
           
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full mt-6 bg-[#05050551] text-white ">
              {/* Sidebar content here */}
              <h2></h2>
              {navLinks}
            </ul>
          </div>
        </div>
      </div>

    </div>
    </div>
  </QueryClientProvider>
  );
};

export default Dashboard;