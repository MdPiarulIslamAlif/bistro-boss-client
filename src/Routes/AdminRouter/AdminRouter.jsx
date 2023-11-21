import { useLocation } from "react-router-dom";
import useAdmin from "../../Hook/useAdmin";
import userAuth from "../../Hook/userAuth";

const AdminRouter = ({children}) => {
  const { user, loading } = userAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();
  if (loading || isAdminLoading) {
    return <span className="loading loading-ring loading-lg mt-96 ml-[800px] "></span>
  
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default AdminRouter;
