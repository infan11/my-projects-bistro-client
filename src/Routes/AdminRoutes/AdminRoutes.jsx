import { Puff } from "react-loader-spinner";
import UseAuth from "../../Components/Hooks/UseAuth";
import { Navigate } from "react-router-dom";
import useAdmin from "../../Components/Hooks/useAdmin";


const AdminRoutes = ({children}) => {
 const {user , loading } = UseAuth();
 const [isAdmin , isAdminLoading] =useAdmin()
 if(loading || isAdminLoading ){
    return <div className="flex justify-center items-center min-h-screen">
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
    return children
 }
    return  <Navigate to={"/"} state={{from: location} }  replace ></Navigate>
};

export default AdminRoutes;