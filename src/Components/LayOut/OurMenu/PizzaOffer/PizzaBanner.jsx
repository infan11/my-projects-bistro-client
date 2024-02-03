import { Link } from "react-router-dom";

const PizzaBanner = () => {
    return (
        <div>
             <div>
            <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className=' text-center mt-5'>
    <Link to={"/ourShop"}><button  className='p-3 btn font-[Inter] bg-transparent border-b-4 rounded-xl border-[white] w-80 '>ORDER YOUR FAVOURITE FOOD</button></Link>
            </div>
             <div data-aos="zoom-in"  className="bistroPizza hidden lg:block  bg-fixed mb-10 mt-10 ">
    <div className=" text-white bg-[#060606a3] rounded-lg p-24 text-center max-w-screen-md mx-auto ">
        <h2 className="font-bold font-[Cinzel] text-5xl ">PIZZA</h2>
        <br />
        <p>In the realm of pizzas, our menu boasts enticing delights. From the savory Roasted Duck Pizza to the delectable Goats Cheese Pizza, each slice is a flavor-packed journey. Explore pizza perfection today!</p>
    </div>
</div>
        </div>
        </div>
    );
};

export default PizzaBanner;