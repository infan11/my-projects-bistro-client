import Banner from "../Banner/Banner";
import Kitchen from "../Kitchen/Kitchen";
import OrderOnline from "../OrderOnline/OrderOnline";

const Home = () => {
    return (
        <div className="min-h-screen">
        <Banner></Banner>
        <OrderOnline></OrderOnline>
        <Kitchen></Kitchen>
        </div>
    );
};

export default Home;