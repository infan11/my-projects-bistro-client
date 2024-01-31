
import SectionTitle from "../../../Shared/SectionTitle";
import MenuItem from "../../../Shared/MunuItem/MenuItem";
import UseMenu from "../../../Hooks/UseMenu";

const CheckOutMenu = () => {
     const [menu] = UseMenu();
    const popular = menu.filter(item => item.category === "popular") 
    return (
        <div>
            <div  data-aos="fade-down " className="md:max-w-7xl  "
   
  
    >
           <SectionTitle   heading={"---Check it out---"} subHeading={"FROM OUR MENU"}></SectionTitle>

            </div>
            <div  className="  grid md:grid-cols-2 gap-3 ">
                {
                    popular.map(item  => <MenuItem key={item.id} item={item} ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default CheckOutMenu;