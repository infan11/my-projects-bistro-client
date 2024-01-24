import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const Register = () => {
    const {createUser } = useContext(AuthContext)
  const handleFormSubmit = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const signUser = {name , photo , email , password} 
    console.log(signUser);
    if(password < 6) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
    }
  }


    return (
        <div className="hero min-h-screen">
            <div className=" w-full max-w-sm shadow-2xl bg-white   p-5 rounded-md ">
      <form onSubmit={handleFormSubmit} >
      
        <div className="justify-center items-baseline flex">
        <button className=" bg-white  p-2   text-3xl "> <FcGoogle /></button>
        <button className="bg-black text-white text-3xl"><IoLogoGithub /></button>
        </div>
        <div className="divider divider-primary">or</div>
        <p className="text-black text-center font-bold font-mono ">You Have a Account ?  Now <Link className="text-xl text-green-600 " to={"/login"}>SignIn</Link></p>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-xl font-mono font-bold">Name</span>
          </label>
          <input type="text" name="name" placeholder="Your Name" className="p-3 bg-white shadow-inner text-black font-bold font-mono" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-xl font-mono font-bold">PhotoURL</span>
          </label>
          <input type="text" name="photo" placeholder="photo" className="p-3 bg-white shadow-inner text-black font-bold font-mono" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-xl font-mono font-bold">Email</span>
          </label>
          <input type="email" name="email" placeholder="Email" className="p-3 bg-white shadow-inner text-black font-bold font-mono" required />
        </div>
       
   

      
        <div className="form-control">
          <label className="label">
            <span className="label-text  text-black text-xl font-mono font-bold">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="p-3 bg-white shadow-inner text-black font-bold" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover  text-black text-xl font-mono font-bold">Forgot password?</a>
          </label>
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