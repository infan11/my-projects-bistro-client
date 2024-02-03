import Swal from "sweetalert2";
import useCart from "../../../Hooks/useCart";
import SectionTitle from "../../../Shared/SectionTitle";
import { MdOutlineDeleteSweep } from "react-icons/md";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Cart = () => {
    const [cart , refetch ] = useCart();
    
    const axiosSecure = useAxiosSecure();
   const totalPrice =  cart.reduce((total, item) => total + item.price , 0 )
   const hnaldeDeleted = id => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
      
        axiosSecure.delete(`/carts/${id}`)
        
        .then(res => {
          if(res.data.deletedCount > 0){
            refetch();
                 Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          }
        })
        }
      });
   }
    return (
        <div>
            <br />
            <SectionTitle heading={`Total Order ${cart.length}`}  ></SectionTitle>
            <div className="w-80 mx-auto">
            <p className="bg-red-600 p-3   text-white font-mono text-center font-bold ml-7">Pay ${totalPrice}</p>

            </div>
            <br />
           <div>
             <div className="grid md:grid-cols-2 gap-6 ">
                {
                    cart.map((item ,index) => <div key={item._id} className=" flex    shadow-xl">
                    <figure><img src={item.image} alt="Unavilable " className="w-52 min-h-full rounded-xl"/></figure>

                    <div className="card-body">
                    <p> Order:{index + 1}</p>
                      <h2 className="card-title ">{item.name}
                      
                      </h2>
                     
                      <p>${item.price}</p>
                      <div className="card-actions ">
                      <p onClick={() => hnaldeDeleted(item._id)} className="text-4xl btn-block btn text-white hover:bg-red-600"><MdOutlineDeleteSweep /></p>

                      </div>
                    </div>
                  </div>)
                }
            
             </div>
             <br />
             <p className="btn btn-block bg-red-600 text-white text-xl">Confirm Order</p>
           </div>
        </div>
    ); 
};

export default Cart;