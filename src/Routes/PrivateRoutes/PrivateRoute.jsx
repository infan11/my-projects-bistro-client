import { useContext } from "react";
import { AuthContext } from "../../Components/Provider/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Puff } from "react-loader-spinner";

const PrivateRoute = ({children}) => {
 const {user,loading} = useContext(AuthContext);
 const location = useLocation();
 if(loading) {
    return  <div className="flex min-h-screen mx-auto hero">
        <Puff
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        />
    </div>
      
 } 
 if(!user){
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
 }
    return children
};

export default PrivateRoute;