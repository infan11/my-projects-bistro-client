import SectionTitle from "../../../../Shared/SectionTitle";
import image from '../../../.././../assets/home/featured.jpg'
const Featured = () => {
    return (
        <div data-aos="zoom-down" className="bistroFeatured   bg-fixed p-36  hidden lg:block">
            <br />
            <div   data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
     data-aos-offset="300"
     className="">
          <SectionTitle heading={"------Check it out------"}  subHeading={"FROM OUR MENU"}></SectionTitle>
            
             
        </div>
        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex gap-5 text-white font-bold   justify-center">
            <img data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"  src={image} className="w-96" alt="" />
            <p data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">March 20, 2023 <br />
            WHERE CAN I GET SOME? <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error <br /> voluptate facere, deserunt dolores maiores quod nobis quas <br /> quasi. Eaque repellat recusandae ad laudantium tempore <br /> consequatur consequuntur omnis ullam maxime tenetur.</p>
        </div>
        </div>
    );
};

export default Featured;