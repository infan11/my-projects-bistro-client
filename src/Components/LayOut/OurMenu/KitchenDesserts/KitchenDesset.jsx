

import { Link } from 'react-router-dom';
import './kitchenDesserts.css'
const KitchenDesset = () => {

    return (
        <div>
            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className=' text-center '>
            <Link to={"/ourShop"}><button  className='p-3  btn font-[Inter] bg-transparent border-b-4 rounded-xl border-[white] w-80 '>ORDER YOUR FAVOURITE FOOD</button></Link>

            </div>
             <div data-aos="zoom-in"  className="bistroMenu hidden lg:block bg-fixed mb-10 mt-10 ">
    <div className=" text-white bg-[#060606a3] rounded-lg p-24 text-center max-w-screen-md mx-auto ">
        <h2 className="font-bold font-[Cinzel] text-5xl ">DESSERTS</h2>
        <br />
        <p>
Indulge in exquisite desserts at our restaurant. From rich chocolate creations to fruity delights, our desserts are crafted to satisfy every sweet craving, ensuring a delightful conclusion to your dining experience.</p>
    </div>
</div>
        </div>
    );
};

export default KitchenDesset;