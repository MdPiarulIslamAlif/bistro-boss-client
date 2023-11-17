import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({children}) => {
     const {user, loading} = useContext(AuthContext)
     const location = useLocation()
console.log(user);
     
     if(loading){
        return <span className="loading loading-ring loading-lg mt-96 ml-[800px] "></span>;
     }

     if(user){
          return children;
     }

     return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;