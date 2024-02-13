import SectionTitle from "../../../Shared/SectionTitle";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const ContactMiddle = () => { 
  const axiosSecure = useAxiosSecure();
  const hanldeSubmit = event=> {
     event.preventDefault();
     const form = event.target;
     const name = form.name.value;
     const email = form.email.value;
     const message = form.message.value;
     const phone = form.phone.value;
     const dataCon = {name , email , message, phone}
     console.log(dataCon);
  //  fetch("http://localhost:5000/contacts" , {
  //   method:"POST",
  //   headers:{ "content-type" :  "application/json"
  // }, 
  // body:JSON.stringify(dataCon)
  //  })
   
  //  .then(res => res.json())
  //  .then(data => {
  //   console.log(data);
  //   if(data.insertedId){
  //     Swal.fire({
  //       title: ` Thank You for your Feedback .  ${name} `,
  //       showClass: {
  //         popup: `
  //           animate__animated
  //           animate__fadeInUp
  //           animate__faster
  //         `
  //       },
  //       hideClass: {
  //         popup: `
  //           animate__animated
  //           animate__fadeOutDown
  //           animate__faster
  //         `
  //       }
  //     });
  //   }
  //  })
    axiosSecure.post("/contacts" , dataCon)
    .then(res => {
      console.log(res.data)
      if(res.data.insertedId){
        Swal.fire({
          title: `${name}  Successfully Order`,
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `
          },

          customClass: {
            title: 'custom-swal-title', // Add a custom class to the title
          }
        });

        
      }
    })
  }
    return (
        <div>
             <div   data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
     data-aos-offset="300"
     className="">
          <SectionTitle heading={"---Visit Us---"}  subHeading={"OUR LOCATION"}></SectionTitle>    
        </div>
        <br />
        <div>
            <div className="grid md:grid-cols-3 gap-7">
               <div className="w-80 mx-auto  ">
                <div className="border-4">
                  <header className="bg-orange-400 text-white p-3 text-2xl "> <p className="ml-32">  <MdOutlineWifiCalling3 /></p></header>
                  <div className=" w-72 mx-auto bg-gray-300 text-center   p-9">
                    <p className="text-xl font-bold  text-black font-[inter] ">PHONE</p>
                 
                    <p className="text-xs font-bold text-black font-[inter] ">01610240096</p>
                  </div>
                </div>
               </div>
               <div className="w-80 mx-auto  ">
                <div className="border-4">
                  <header className="bg-orange-400 text-white p-3 text-2xl "> <p className="ml-32">  <IoLocationSharp /></p></header>
                  <div className=" w-72 mx-auto bg-gray-300 text-center   p-9">
                    <p className="text-xl font-bold  text-black font-[inter] ">ADDRESS</p>
                 
                    <p className="text-xs font-bold text-black font-[inter] ">01610240096</p>
                  </div>
                </div>
               </div>
               <div className="w-80 mx-auto  ">
                <div className="border-4">
                  <header className="bg-orange-400 text-white p-3 text-2xl "> <p className="ml-32">  <FaClockRotateLeft /></p></header>
                  <div className=" w-72 mx-auto bg-gray-300 text-center   p-7">
                    <p className="text-xl font-bold  text-black font-[inter] ">WORKING HOURS</p>
                 
                    <p className="text-xs font-bold text-black font-[inter] ">Mon - Fri: 08:00 - 22:00 <br />
           Sat - Sun: 10:00 - 23:00</p>
                  </div>
                </div>
               </div>
            </div>
        </div>
        <div   data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"
     data-aos-offset="300"
     className="">
          <SectionTitle heading={"---Send Us a Message---"}  subHeading={"CONTACT FORM"}></SectionTitle>    
        </div>
        {/* form section */}
         <div className="bg-[#060606a3]">
         <form onSubmit={hanldeSubmit} className="card-body bg-white ">
        <div className="md:flex  gap-6  ">
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text text-black font-bold">Name</span>
          </label>
          <input type="text" placeholder="Name" name="name" className="input input-bordered text-white bg-black font-bold" required />
        </div>
        <div className="form-control md:w-1/2">
          <label className="label">
            <span className="label-text text-black font-bold">Email</span>
          </label>
          <input type="email" placeholder="Email" name="email" className="input input-bordered bg-black text-white font-bold" required />
         
        </div>
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text text-black font-bold">Phone</span>
          </label>
          <input type="phone" placeholder="Phone" name="phone" className="input input-bordered bg-black text-white font-bold" required />
         
        </div>
        <br />
        <span className="label-text text-black font-bold ">Message</span>
        <div>

    
            <textarea name="message" className="w-full h-96 p-5 bg-black text-white " placeholder="What your message here ?" required></textarea>
        </div>
        <button className="flex  items-center gap-3 bg-gradient-to-tr  from-yellow-600 to-zinc-500  mx-auto p-3 text-white">Send Message<FaTelegramPlane /></button>
      </form>         
         </div>
        </div>
    );
};

export default ContactMiddle;