import axios from "axios";
import { useNavigate } from "react-router-dom";
import userAuth from "./userAuth";

export const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosSequre = () => {
  const navigate = useNavigate();
  const { logOUt } = userAuth();
  // request interceptor to add authorization header for every secure call to the api
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access token");
      console.log("requset sotpped by interceptors", token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  //intercepts 401 and 403 status
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response.status;
      console.log("status error in the interceptor", status);
 //for 401 or 403 logOut the use and move the user to the login
      if (status === 401 || status === 403) {
        await logOUt;
        navigate('/login')
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSequre;
