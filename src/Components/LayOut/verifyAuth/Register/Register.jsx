import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import 'react-toastify/dist/ReactToastify.css';
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";
const Register = () => {
    const {createUser , updateUserProfile,  googleAuth, githubAuth,} = useContext(AuthContext)
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/"  ;
    const axiosPublic  = useAxiosSecure();
  const handleFormSubmit = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    // const signUser = {name , photo , email , password} 
    // console.log(signUser);
    if(password.length < 6){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Password 6 characters",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
    } 
   
      createUser(email, password , name , photo)
    .then(result => {
      const createRegister = result.user;
      console.log(createRegister)
      updateUserProfile(name , photo)
      .then(() => {
        const userInfo = {
          name: name ,
          email : email
        }
        axiosPublic.post("/users" , userInfo)
        .then(res => {
          if(res.data.insertedId){
            console.log("send to database ");
      
        form.reset();
        Swal.fire({
          title: "Successfully Register",
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
          }
        });
      }
          
    })
      })
     
        navigate(from , {replace : true})
  
    })

  .catch(error => {
    console.error(error)
    if(error.code === "auth/email-already-in-use"){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Already Use Email",
            footer: '<a href="#"></a>'
          });
    }
    else if(error.code === "auth/network-request-failed"){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Connect Internet",
        footer: '<a href="#"></a>'
      });
    }
  })
    
}
const handleAuthGoogle = () =>{
    googleAuth()
    .then(result => {
        const googleUser = result.user;
        console.log(googleUser)
        const userItem = {
          email : result.user?.email,
          name : result.user?.displayName,
        }
        axiosPublic.post("/users" , userItem)
        .then(res => {
          if(res.data){
            Swal.fire({
              title: "Successfully Google Register",
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
              }
            });
          }
         
        })
       
        navigate(from , {replace : true})
    })
  .catch(error => {
    console.error(error)
    if(error.code === "auth/internal-error"){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Connect Internet",
        footer: '<a href="#"></a>'
      });
    }
  })
}
const handleGithubUser = () => {
    githubAuth()
    .then(result =>{
        const githubUser = result.user;
        console.log(githubUser);
        Swal.fire({
          title: "Successfully Github Register",
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
          }
        });
        navigate(from , {replace : true})
    })
    .catch(error => {
      console.error(error)
      if(error.code === "auth/internal-error"){
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please Connect Internet",
          footer: '<a href="#"></a>'
        });
      }
    })
    
}
    return (
        <div data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000" className="hero min-h-screen">
            <div className=" w-full max-w-sm shadow-2xl  bg-gradient-to-t from-[#050505e4] to-[#081246e4]  p-5 rounded-md ">
      <form onSubmit={handleFormSubmit} >
      
        <div className="justify-center items-baseline flex">
        <button onClick={handleAuthGoogle} className=" p-2   text-3xl "> <FcGoogle /></button>
        <button onClick={handleGithubUser} className="text-3xl"><IoLogoGithub /></button>
        </div>
        <div className="divider divider-primary">or</div>
        <p className="text-white text-center font-bold font-mono ">You Have a Account ?  Now <Link className="text-xl text-green-600 " to={"/login"}>SignIn</Link></p>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white text-xl font-mono font-bold">Name</span>
          </label>
          <input type="text" name="name" placeholder="Your Name" className="p-[3px] bg-transparent shadow-2xl rounded-lg  text-white font-bold font-mono" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white text-xl font-mono font-bold">PhotoURL</span>
          </label>
          <input type="text" name="photo" placeholder="photo" className="p-[3px] bg-transparent shadow-2xl rounded-lg  text-white font-bold font-mono" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white text-xl font-mono font-bold">Email</span>
          </label>
          <input type="email" name="email" placeholder="Email" className="p-[3px] bg-transparent shadow-2xl rounded-lg  text-white font-bold font-mono" required />
        </div>
       
   

      
        <div className="form-control">
          <label className="label">
            <span className="label-text  text-white text-xl font-mono font-bold">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="p-[3px] bg-transparent  shadow-2xl rounded-lg  textwhtext-whitek font-bold" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary text-white font-mono">Continue</button>
        </div>
        
       
        
      </form>
    </div>
        </div>
    );
};

export default Register;