import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { GoHome } from "react-icons/go";
import { HiOutlineLogout } from "react-icons/hi";
import { IoLogIn } from "react-icons/io5";
import { BiSolidFoodMenu } from "react-icons/bi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { MdOutlineRestaurant } from "react-icons/md";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
const Navbar = () => {

  const {user , logout} = useContext(AuthContext);
  const handleLogout  = () => {
    logout() 
    .then(() => {} )
    .catch(error => console.error(error))
  }
  



                     
  const navLinks = <>
    <NavLink to="/"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "font-bold  flex items-center gap-2 text-yellow-400 " : ""
  }
>
<GoHome />HOME
         
  </NavLink>
  <NavLink to="/contactUs"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "font-bold flex items-center gap-2  text-yellow-400  " : ""
  }
>
  <MdOutlineConnectWithoutContact/>CONTACTUS
         
  </NavLink>
  <NavLink to="/dashboard"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "font-bold  flex items-center gap-2 text-yellow-400  " : ""
  }
>
 <MdOutlineDashboardCustomize/> DASHBOARD
         
  </NavLink>
  <NavLink to="/ourMenu"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "font-bold flex items-center gap-2  text-yellow-400  " : ""
  }
>
<BiSolidFoodMenu />OUR MENU
         
  </NavLink>
  <NavLink to="/ourShop"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "font-bold flex items-center gap-2 text-yellow-400  " : ""
  }
>
  <MdOutlineRestaurant></MdOutlineRestaurant> OURSHOP
         
  </NavLink>
  
  
  </>
    return (
        <div>
          <div className=" navbar fixed z-10 bg-[#8000806c] max-w-6xl mx-auto  font-[Inter]">
             <div className="flex-1">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 text-white bg-[#2600806c]  w-52">
        {navLinks}
      </ul>
    </div>

    <a className=" text-white text-xl font-[Cinzel]" >BISTRO BOSS <br />
    <p className="uppercase">R e s t a u r a n t</p>
    </a>

  </div>
  <div className="navbar-center  hidden lg:flex">
    <ul className="menu menu-horizontal gap-10   text-white font-bold ">
      {navLinks}
    </ul>
  </div>
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </div>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>

{  user ? <><NavLink onClick={handleLogout}
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "font-bold   text-yellow-400  " : ""
  }
>
<HiOutlineLogout />SIGNOUT
         
  </NavLink></> :<>
  <NavLink  to="/login"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "font-bold mr-5 text-yellow-400  " : ""
  }
>
<IoLogIn />SIGNIN
         
  </NavLink> 

  
  <NavLink to="/register"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "font-bold   text-yellow-400  " : ""
  }
>
  
         
  </NavLink>
  </>}
  
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="" src={user?.photoURL} />
        </div>
      </div>
     <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2000">
     <ul  tabIndex={0} className="menu menu-sm dropdown-content text-white mb-5  p-5 shadow bg-[#432c8f] rounded-box w-96 h-96">
      <div className="">
          <img alt="" src={user?.photoURL} className="rounded-full w-28 mx-auto" />
        </div>
        <br />
        <li><a>{user?.email}</a></li>
        <div className="divider"></div>
        <li><a>{user?.displayName}</a></li>
        <div className="divider"></div>  
        <li>
{  user ? <><NavLink onClick={handleLogout}
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "font-bold   text-yellow-400  " : ""
  }
>
<HiOutlineLogout />SIGNOUT
         
  </NavLink></> :<>
  <NavLink  to="/login"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "font-bold  text-yellow-400  " : ""
  }
>
<IoLogIn />SIGNIN
         
  </NavLink> 

  
  <NavLink to="/register"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "font-bold   text-yellow-400  " : ""
  }
>
  
         
  </NavLink>
  </>}</li>
      </ul>
     </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;