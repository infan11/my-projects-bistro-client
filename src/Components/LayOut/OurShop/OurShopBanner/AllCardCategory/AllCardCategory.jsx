import { HiMiniCurrencyDollar } from "react-icons/hi2";
import UseAuth from "../../../../Hooks/UseAuth";
import Swal from "sweetalert2";
import {  useLocation, useNavigate } from "react-router-dom";

const AllCardCategory = ({item}) => {
    const {name, recipe,image,category, price}   = item;
    const {user} = UseAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const handelAddToCart = food => {
      if(user && user.email){
        // to do : send cart item to database
      }
      else{
        Swal.fire({
          title: "Please Login ",
          text: "You Cannot Entry!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, SignIn"
        }).then((result) => {
          if (result.isConfirmed) {
          navigate("/login" , {state : {from : location}})
          }
        });
      }
    }
    return (
        <div>
             <div   data-aos="zoom-in" className=" w-72  shadow-xl">
  <figure className="">
    <img src={image} alt="unavilable " className="relative"  />
    <p className="absolute flex items-center bg-[#0e0918eb] text-white font-bold top-2 ml-52 bg- p-2 rounded-lg"><HiMiniCurrencyDollar />{price}</p>
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title ">{name}</h2>
    <p className="text-xs ">{recipe}</p>
    
    <div className="card-actions">
    <div data-aos="flip-left"
 data-aos-easing="ease-out-cubic"
 data-aos-duration="2000" className=' text-center  mt-3 mb-6'>
        <button onClick={() =>  handelAddToCart(item)} className='p-2 text-yellow-300 btn font-[Inter] bg-transparent border-b-4 rounded-xl border-[white] w-60 '>Add to cart</button>

        </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default AllCardCategory;