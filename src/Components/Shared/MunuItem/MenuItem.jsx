
const MenuItem = ({item}) => {
 const   {name,recipe,image,category,price,}  = item;

    return (
      <div  data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500">
      <div className="flex gap-4 mb-3 ">
        <img  className="bistroImage w-20  rounded-2xl" src={image} alt="" />
        <div>
           <p>{name}</p>
           
           <p>{recipe}</p>
           
        </div>
        <p>{category}</p>
        <p>{price}</p>
        </div>           
   </div>
    );
};

export default MenuItem;