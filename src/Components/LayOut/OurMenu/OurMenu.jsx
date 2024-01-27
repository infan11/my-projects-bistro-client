
import KitchenDesset from "./KitchenDesserts/KitchenDesset";
import MenuBanner from "./MenuBanner/MenuBanner";
import TodayOffer from "./TodayOffer/TodayOffer";


const OurMenu = () => {

    return (
        <div>
             <MenuBanner></MenuBanner>      
             <TodayOffer></TodayOffer>
             <KitchenDesset></KitchenDesset>
             
        </div>
    );
};

export default OurMenu;