import { useQuery } from "@tanstack/react-query";
import useAxiosSequre, { axiosSecure } from "./useAxiosSequre";
import userAuth from "./userAuth";

const useCarts = () => {
  //tans tack
  const axiosSecure = useAxiosSequre();
  const {user} = userAuth();
  const {refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user.email}`);
      return res.data;
    },
  });
  return [cart, refetch];
};

export default useCarts;
