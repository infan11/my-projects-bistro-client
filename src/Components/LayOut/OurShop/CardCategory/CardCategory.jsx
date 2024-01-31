import AllCardCategory from "../OurShopBanner/AllCardCategory/AllCardCategory";


const CardCategory = ({items}) => {
    return (
        <div className="grid md:grid-cols-3 ml-10 mt-6">
             {
                items.map(item => <AllCardCategory key={item.id} item={item}></AllCardCategory>)
             }
        </div>
    );
};

export default CardCategory;