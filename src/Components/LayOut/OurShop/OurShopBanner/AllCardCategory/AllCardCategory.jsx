import { HiMiniCurrencyDollar } from "react-icons/hi2";

const AllCardCategory = ({item}) => {
    const {name, recipe,image,category, price}   = item;
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
        <button  className='p-2 text-yellow-300 btn font-[Inter] bg-transparent border-b-4 rounded-xl border-[white] w-60 '>Add to cart</button>

        </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default AllCardCategory;