

const MenuOffer = ({item}) => {
    const   {name,recipe,image,category,price,}  = item;

    return (
        <div  data-aos="zoom-out-right">
           <div className="flex gap-4 mb-3 ">
             <img  className="w-[118px] h-[104px] rounded-2xl" src={image} alt="" />
             <div>
                <p>{name}</p>
                <p>{recipe}</p>
             </div>
             <p>{price}</p>
             </div>           
        </div>
    );
};

export default MenuOffer;