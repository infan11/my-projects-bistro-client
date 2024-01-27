
import { useEffect, useState } from "react";
import SectionTitle from "../../../Shared/SectionTitle";

import MenuOffer from "../MenuOffer/MenuOffer";
const TodayOffer = () => {
    const [menu , setMenu ] = useState([]);
    useEffect(() => {
        fetch("/menu.json")
        .then(res => res.json())
        .then(data => {
            const popularFiter = data.filter(item => item.category === "popular")
           setMenu(popularFiter);
        })
    },[])
    return (
        <div>
            <div   data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="">
          <SectionTitle heading={"---Don't miss---"} subHeading={"TODAY'S OFFER"}></SectionTitle>
            <div  className="  grid md:grid-cols-2 gap-3 ">
                {
                    menu.map(item  => <MenuOffer key={item.id} item={item} ></MenuOffer>)
                }
            </div>
        </div>
        </div>
    );
};

export default TodayOffer;