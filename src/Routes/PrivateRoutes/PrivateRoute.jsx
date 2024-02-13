import { useContext } from "react";
import { AuthContext } from "../../Components/Provider/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Puff } from "react-loader-spinner";
import useAdmin from "../../Components/Hooks/useAdmin";

const PrivateRoute = ({children}) => {
 const {user,loading} = useContext(AuthContext);
 const [isAdmin , isAdminLoading] = useAdmin()
 const location = useLocation();
 if(loading || isAdminLoading) {
    return  <div className="flex justify-center items-center min-h-screen">
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
 if(!user && isAdmin){
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
 }
    return children
};

export default PrivateRoute;