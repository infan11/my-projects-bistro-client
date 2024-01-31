import SectionTitle from "../../../Shared/SectionTitle";
import image from '../../../../../../bistro-boss-restaurant-resources/assets/menu/salad-bg.jpg'
import imageA from '../../../../../../bistro-boss-restaurant-resources/assets/menu/pizza-bg.jpg'
import imageB from '../../../../../../bistro-boss-restaurant-resources/assets/menu//soup-bg.jpg'
import imageC from '../../../../../../bistro-boss-restaurant-resources/assets/menu/dessert-bg.jpeg'
const HomeMenuCard = () => {
    return (
        <div>
            <div   data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
     data-aos-offset="300"
     className="">
          <SectionTitle heading={"---Should Try---"} subHeading={"CHEF RECOMMENDS"}></SectionTitle>

          </div>
            <div className="md:max-w-7xl    grid md:grid-cols-4 gap-2">
            <div   data-aos="zoom-in" className=" w-72  shadow-xl">
  <figure className="">
    <img src={image} alt="unavilable " className=""  />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title ">Caeser Salad</h2>
    <p className="text-xs ">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="card-actions">
    <div data-aos="flip-left"
 data-aos-easing="ease-out-cubic"
 data-aos-duration="2000" className=' text-center  mt-3 mb-6'>
        <button  className='p-2 text-yellow-300 btn font-[Inter] bg-transparent border-b-4 rounded-xl border-[white] w-60 '>Add to cart</button>

        </div>
    </div>
  </div>
</div>
            <div  data-aos="zoom-in" className=" w-72  shadow-xl">
  <figure className="">
    <img src={imageA} alt="unavilable " className=""  />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title ">Caeser Pizza</h2>
    <p className="text-xs ">Chicken, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="card-actions">
    <div data-aos="flip-left"
 data-aos-easing="ease-out-cubic"
 data-aos-duration="2000" className=' text-center  mt-3 mb-6'>
        <button  className='p-2 text-yellow-300 btn font-[Inter] bg-transparent border-b-4 rounded-xl border-[white] w-60 '>Add to cart</button>

        </div>
    </div>
  </div>
</div>
            <div  data-aos="zoom-in" className=" w-72  shadow-xl">
  <figure className="">
    <img src={imageB} alt="unavilable " className=""  />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title ">Caeser Soup</h2>
    <p className="text-xs ">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div className="card-actions">
    <div data-aos="flip-left"
 data-aos-easing="ease-out-cubic"
 data-aos-duration="2000" className=' text-center  mt-3 mb-6'>
        <button  className='p-2 text-yellow-300 btn font-[Inter] bg-transparent border-b-4 rounded-xl border-[white] w-60 '>Add to cart</button>

        </div>
    </div>
  </div>
</div>
            <div  data-aos="zoom-in" className=" w-72  shadow-xl">
  <figure className="">
    <img src={imageC} alt="unavilable " className="h-40"  />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title ">Caeser Desserts</h2>
    <p className="text-xs ">Chicken, Parmesan Cheese, Chicken Breast Fillets.</p>
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
        </div>
    );
};

export default HomeMenuCard;