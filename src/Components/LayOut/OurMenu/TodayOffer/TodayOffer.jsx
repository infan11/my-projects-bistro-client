

import SectionTitle from "../../../Shared/SectionTitle";

import MenuOffer from "../MenuOffer/MenuOffer";
import DessertMenu from "../DessertMenu/DessertMenu";
import KitchenDesset from "../KitchenDesserts/KitchenDesset";
import PizzaBanner from "../PizzaOffer/PizzaBanner";
import PizzaOffer from "../PizzaOffer/PizzaOffer";
import UseMenu from "../../../Hooks/UseMenu";
import SaladBanner from "../SaladOffer/SaladBanner";
import SaladOffer from "../SaladOffer/SaladOffer/SaladOffer";
const TodayOffer = () => {
    const [menu] = UseMenu();
    const popular = menu.filter(item => item.category === "popular")
    const drinks = menu.filter(item => item.category === "drinks")
    const dessert = menu.filter(item => item.category === "dessert")
    const pizza = menu.filter(item => item.category === "pizza")
    const salad = menu.filter(item => item.category === "salad")
     return (
        <div>
            <div   data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
     data-aos-offset="300"
      className="">
          <SectionTitle heading={"---Don't miss---"} subHeading={"TODAY'S OFFER"}></SectionTitle>
            
             
        </div>
        <div  className="  grid md:grid-cols-2 gap-3 ">
                {
                    popular.map(item  => <MenuOffer key={item.id} item={item} ></MenuOffer>)
                }
            </div>
         <div>
         <KitchenDesset></KitchenDesset>
         </div>
           <div className="grid md:grid-cols-2 gap-2">
            {
             dessert.map(item => <DessertMenu key={item.id} item={item}></DessertMenu>)
            }
           </div>
          <div className="mt-2">
            <PizzaBanner></PizzaBanner>
          </div>
          <div className="grid md:grid-cols-2 gap-3">

            {
                pizza.map(item => <PizzaOffer key={item.id} item={item}></PizzaOffer>)
            }
          </div>
          <div className="mt-2">
             <SaladBanner></SaladBanner>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {
                salad.map(item => <SaladOffer key={item.id} item={item}></SaladOffer>)
            }
          </div>
          <div data-aos="flip-left"
 data-aos-easing="ease-out-cubic"
 data-aos-duration="2000" className=' text-center  mt-3 mb-6'>
        <button  className='p-3 btn font-[Inter] bg-transparent border-b-4 rounded-xl border-[white] w-80 '>ORDER YOUR FAVOURITE FOOD</button>

        </div>
       
        </div>
    );
};

export default TodayOffer;