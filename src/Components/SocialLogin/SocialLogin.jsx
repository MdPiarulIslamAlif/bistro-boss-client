import { FaGoogle } from "react-icons/fa";
import userAuth from "../../Hook/userAuth";
import useAxiosPublic from "../../Hook/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
     const {signInGoogle} = userAuth();
     const axiosPublic = useAxiosPublic()
     const navigate = useNavigate()

      const handleGoogleSignIn = () => {
          signInGoogle()
          .then(result=>{
               console.log(result.user);
               const userInfo={
                email:result.user?.email,
                name: result.user?.displayName,
               }
               axiosPublic.post('/users',userInfo)
               .then(res=>{
                console.log(res.data);
                navigate('/')
               })
          })
          .catch(error=>{
               console.log(error);
          })

      };

  return (
    <div>
      <div className="ml-10">
        <button 
        onClick={handleGoogleSignIn}
        className="btn px-20">
          <FaGoogle></FaGoogle>
          GOOGLE
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
