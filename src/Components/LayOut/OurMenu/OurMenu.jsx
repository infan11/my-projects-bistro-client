
import { Helmet } from "react-helmet-async";
import MenuBanner from "./MenuBanner/MenuBanner";
import TodayOffer from "./TodayOffer/TodayOffer";


const OurMenu = () => {

    return (
        <div>
             <Helmet>
        <title className="">Bistro Boss | Ourmenu</title>
      </Helmet>
      
             <MenuBanner></MenuBanner>      
             <TodayOffer></TodayOffer>
            
             
        </div>
    );
};

export default OurMenu;