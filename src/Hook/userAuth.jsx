import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const userAuth = () => {
 const auth = useContext(AuthContext);
 return auth
};

export default userAuth;