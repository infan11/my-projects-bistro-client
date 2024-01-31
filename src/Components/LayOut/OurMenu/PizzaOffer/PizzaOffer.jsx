

const PizzaOffer = ({item}) => {
    const {name, recipe,  image, category,   price,} = item;
    return (
        <div  data-aos="zoom-out-right">
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

export default PizzaOffer;