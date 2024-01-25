import { useContext, useRef } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Alert from '@mui/material/Alert';
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../../Firebase/firebase.config";
const Login = () => {
    const {signInUser ,  googleAuth, githubAuth,} = useContext(AuthContext)
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const emailRef = useRef(null);
  const handleFormSubmit = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const signUser = {email , password} 
    console.log(signUser);
    if(password.length < 6){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Password 6 characters",
            footer: '<a href="#"></a>'
          });
    } 
    signInUser(email , password)
    .then(result => {
        const loginUser  =  result.user;
        console.log(loginUser);
        Swal.fire({
          title: "Successfully Login",
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
        if(error.code === "auth/invalid-credential")
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Email And Password Incorrect",
            footer: '<a href="#"></a>'
          });
    })
}
const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
        console.log('pelase provide an email', emailRef.current.value)
        return;
    }
    else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        console.log('please write a valid email')
        return;
    }

    // send validation email
    sendPasswordResetEmail(auth, email)
    .then(result => {
        const forget = result
        console.log(forget)
        Swal.fire("Please Check Your Email"); 
    })
    .catch(error =>{
        console.log(error)
    })

}
const handleAuthGoogle = () =>{
    googleAuth()
    .then(result => {
        const googleUser = result.user;
        console.log(googleUser)
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
        navigate(from , {replace : true})
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
}
  
    return (
        <div className="hero min-h-screen">
            <div className=" w-full max-w-sm shadow-2xl bg-white   p-5 rounded-md ">
      <form onSubmit={handleFormSubmit} >
      
        <div className="justify-center items-baseline flex">
        <button onClick={handleAuthGoogle} className=" bg-white  p-2   text-3xl "> <FcGoogle /></button>
        <button onClick={handleGithubUser} className="bg-black text-white text-3xl"><IoLogoGithub /></button>
        </div>
        <div className="divider divider-primary">or</div>
        <p className="text-black text-center font-bold font-mono ">You Have a Account ?  Now <Link className="text-xl text-green-600 " to={"/register"}>SignUp</Link></p>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-black text-xl font-mono font-bold">Email</span>
          </label>
          <input type="email" name="email"  ref={emailRef} placeholder="Email" className="p-3 bg-white shadow-inner text-black font-bold font-mono" required />
        </div>
       
   

      
        <div className="form-control">
          <label className="label">
            <span className="label-text  text-black text-xl font-mono font-bold">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="p-3 bg-white shadow-inner text-black font-bold" required />
          <label className="label">
            <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover  text-black text-xl font-mono font-bold">Forgot password?</a>
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

export default Login;





