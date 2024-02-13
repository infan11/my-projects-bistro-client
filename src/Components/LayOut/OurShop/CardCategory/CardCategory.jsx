import AllCardCategory from "../OurShopBanner/AllCardCategory/AllCardCategory";


const CardCategory = ({items}) => {
    return (
        <div className="grid md:grid-cols-3 ml-10 mt-6 gap-3">
             {
                items.map(item => <AllCardCategory key={item._id} item={item}></AllCardCategory>)
             }
        </div>
    );
};

export default CardCategory;
