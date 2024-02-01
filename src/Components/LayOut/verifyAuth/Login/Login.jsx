import { useContext, useRef } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
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
    // const signUser = {email , password} 
    // console.log(signUser);
    if(password.length < 6){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Password 6 characters",
            footer: '<a href="#"></a>'
          });
    } 
    signInUser(email , password )
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
      
        let timerInterval;
Swal.fire({
  title: "Please Check Your Email",
  html: "I will close in <b></b> milliseconds.",
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading();
    const timer = Swal.getPopup().querySelector("b");
    timerInterval = setInterval(() => {
      timer.textContent = `${Swal.getTimerLeft()}`;
    }, 100);
  },
  willClose: () => {
    clearInterval(timerInterval);
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log("Please Check Your Email");
  }
});
       
    })
    .catch(error =>{
        console.error(error)
         if(error.code === "auth/network-request-failed"){
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
        Swal.fire({
          title: "Successfully Google Login",
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
const handleGithubUser = () => {
    githubAuth()
    .then(result =>{
        const githubUser = result.user;
        console.log(githubUser);
        Swal.fire({
          title: "Successfully Github Login",
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
        <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000" className="hero min-h-screen ">
            <div className=" w-full max-w-sm shadow-2xl   bg-gradient-to-tr  from-[#050505e4] to-[#081246e4]  p-5 rounded-md ">
      <form onSubmit={handleFormSubmit} >
      
        <div className="justify-center items-baseline flex">
        <button onClick={handleAuthGoogle} className="   p-2   text-3xl mr-3  "> <FcGoogle /></button>
        <button onClick={handleGithubUser} className="text-3xl"><IoLogoGithub /></button>
        </div>
        <div className="divider divider-primary">or</div>
        <p className="text-white text-center font-bold font-mono ">You Have a Account ?  Now <Link className="text-xl text-green-600 " to={"/register"}>SignUp</Link></p>

        <div className="form-control">
          <label className="label">
            <span className="label-text text-white text-xl font-mono font-bold">Email</span>
          </label>
          <input type="email" name="email"  ref={emailRef} placeholder="Email" className="p-[3px] bg-transparent  shadow-2xl  text-white rounded-xl  font-bold font-mono" required />
        </div>
       
   

      
        <div className="form-control">
          <label className="label">
            <span className="label-text  text-white text-xl font-mono font-bold">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="p-[3px] bg-transparent  shadow-2xl  text-white rounded-xl  font-bold" required />
          <label className="label">
            <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover  text-white text-xl font-mono font-bold">Forgot password?</a>
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






