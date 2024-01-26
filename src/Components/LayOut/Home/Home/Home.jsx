import Banner from "../Banner/Banner";
import CheckOutMenu from "../CheckOutMenu/CheckOutMenu";
import Kitchen from "../Kitchen/Kitchen";
import OrderOnline from "../OrderOnline/OrderOnline";

const Home = () => {
    return (
        <div className="min-h-screen">
        <Banner></Banner>
        <OrderOnline></OrderOnline>
        <Kitchen></Kitchen>
        <CheckOutMenu></CheckOutMenu>
       
        </div>
    );
};

export default Home;