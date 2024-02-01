import { Helmet } from "react-helmet-async";
import ConteactBanner from "./ContectBanner/ConteactBanner";
import ContactMiddle from "./ContectMiddle/ContactMiddle";

const Contactus = () => {
    return (
        <div>
             <Helmet>
        <title className="">Bistro Boss | ContactUs</title>
      </Helmet>
            <ConteactBanner></ConteactBanner>
            <ContactMiddle></ContactMiddle>
        </div>
    );
};

export default Contactus;