import "./Desserts.css"
const DessertMenu = ({ item }) => {
    const {name,recipe,image,category,  price }= item;
    return (
        <div>
           <div className="flex mt-2 gap-2 " >
              <img className="bistroImage   w-20  " src={image} alt="" />
             <div>
               <div>
                <p>{name}</p>
                <p>{category}</p>
               </div>
              <p>{recipe}</p>
              <p>{price}</p>
             </div>
            
             </div>
        </div>
    );
};

export default DessertMenu;