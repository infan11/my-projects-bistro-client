import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import CheckOutMenu from "../CheckOutMenu/CheckOutMenu";
import HomeMenuCard from "../HomeMenuCard/HomeMenuCard";
import Kitchen from "../Kitchen/Kitchen";
import OrderOnline from "../OrderOnline/OrderOnline";
import Review from "../Review/Review";
import Featured from "./Featured/Featured";

const Home = () => {
    return (
        <div className="min-h-screen">
        <Banner></Banner>
        <OrderOnline></OrderOnline>
        <Kitchen></Kitchen>
        <CheckOutMenu></CheckOutMenu>
        <CallUs></CallUs>
        <HomeMenuCard></HomeMenuCard>
        <Featured></Featured>
        <Review></Review>
       
        </div>
    );
};

export default Home;