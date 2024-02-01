import { Helmet } from "react-helmet-async";
import OurShopBanner from "./OurShopBanner/OurShopBanner";
import ShopCard from "./ShopCard/ShopCard";

const OurShop = () => {
    return (
        <div>
             <Helmet>
        <title className="">Bistro Boss | OurShop</title>
      </Helmet>
      <OurShopBanner></OurShopBanner>
      <ShopCard></ShopCard>
        </div>
    );
};

export default OurShop;