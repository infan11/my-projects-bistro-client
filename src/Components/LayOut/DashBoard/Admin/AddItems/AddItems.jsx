import SectionTitle from "../../../../Shared/SectionTitle";
import { RiRestaurantFill } from "react-icons/ri";

const AddItems = () => {
    
    return (
        <div>
          <SectionTitle heading={"--What's Nem"} subHeading={"ADD AN ITEM"}></SectionTitle>
          <div>
          <div className="bg-[#060606a3]">
         <form className="card-body bg-orange-300  ">
     
        <div className="form-control ">
          <label className="label">
            <span className="label-text text-black font-bold">Recipe Name </span>
          </label>
          <input type="text" placeholder="Recipe Nmae " name="name" className="input input-bordered bg-black text-white font-bold" required />
         
        </div>
        <div className="md:flex  gap-6  ">
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text text-black font-bold">Category</span>
          </label>
         
         <select  type="text" placeholder="Category" name="category" className="input input-bordered text-white bg-black font-bold" required>
            <option defaultValue="default"  >Select a Category</option>
            <option value={"salad"}>Salad</option>
            <option value={"drinks"}>Drinks</option>
            <option value={"dessets"}>Desserts</option>
            <option value={"pizza"}>Pizza</option>
            <option value={"soup"}>Soup</option>
            
         </select>
        </div>
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text text-black font-bold">Price</span>
          </label>
          <input type="text" placeholder="Price" name="price" className="input input-bordered bg-black text-white font-bold" required />
         
        </div>
        </div>
        <br />
        <span className="label-text text-black font-bold ">Recipe Deatils</span>
        <div>

    
            <textarea name="message" className="w-full h-96 p-5 bg-black text-white " placeholder="What your message here ?" required></textarea>
        </div>
        <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
        <button className="flex  items-center gap-3 bg-gradient-to-tr  from-yellow-600 to-zinc-500  mx-auto p-3 text-white">Add Item<RiRestaurantFill /></button>
      </form>         
         </div>
          </div>
        </div>
    );
};

export default AddItems;

