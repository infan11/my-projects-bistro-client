import { useEffect, useState } from "react";
import SectionTitle from "../../../Shared/SectionTitle";
import MenuItem from "../../../Shared/MunuItem/MenuItem";

const CheckOutMenu = () => {
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
            <div  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
           <SectionTitle   heading={"---Check it out---"} subHeading={"FROM OUR MENU"}></SectionTitle>

            </div>
            <div  className="  grid md:grid-cols-2 gap-3 ">
                {
                    menu.map(item  => <MenuItem key={item.id} item={item} ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default CheckOutMenu;