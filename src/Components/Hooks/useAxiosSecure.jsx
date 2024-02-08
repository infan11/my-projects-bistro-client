import axios from "axios";
import UseAuth from "./UseAuth";
import { useNavigate } from "react-router-dom";

 const axiosSecure = axios.create({
    baseURL: "https://bistro-boss-server-projects.vercel.app"
})
const useAxiosSecure = () => {
    const {logout} = UseAuth();
    const navigate = useNavigate();
    // request interceptor to add authorization header for every secure call to api 
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem("Access-token")
        console.log("request stooped by interceptos"  , token);
        config.headers.authorization = `Bearer ${token} `
       return config;
    }  , function(error){
        // do somethig with request error
    return Promise.reject(error)
    })

    // incestors 401 and 403 status 
    axiosSecure.interceptors.response.use(function(response) {
        return response;
    } , async (error) => {
        const status = error.response.status;
        console.log("status error in the inceptors" , status);
        // for 401  or 403 logOut the user and move the user to the login
          if(status === 401 || status === 403){
            await logout();
            navigate("/login")
          }
       return Promise.reject(error);    
    })
 return axiosSecure;
};

export default useAxiosSecure;