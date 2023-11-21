import { useQuery } from "@tanstack/react-query";
import userAuth from "./userAuth";
import useAxiosSequre from "./useAxiosSequre";

const useAdmin = () => {
     const {user, loading} = userAuth()
     const axiosSecure = useAxiosSequre();
   const {data: isAdmin, isPending: isAdminLoading} = useQuery({
     queryKey:[user?.email, 'isAdmin'],
     enabled:!! user?.email,
     enabled: !loading,
     queryFn: async()=>{
          const res = await axiosSecure.get(`/users/admin/${user?.email}`)
          return res.data?.admin;
     }
   })
   return[isAdmin, isAdminLoading]
};

export default useAdmin;