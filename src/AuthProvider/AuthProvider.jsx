import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase';

export const AuthContext = createContext(null) 

//google Login
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
 
     const [user,setUser] = useState()
     const [loading, setLoading] = useState()


     //signUP
     const createUser = (email,password)=>{
          setLoading(true);
          return createUserWithEmailAndPassword(auth, email, password)
           
     }
     //signIn/Login
     const loggedIn =(email, password)=>{
           setLoading(true);
          return signInWithEmailAndPassword(auth, email, password)
         
     }
     
     //signIn with google
     const signInGoogle = ()=>{
           setLoading(true);
          return signInWithPopup(auth,googleProvider);
     }

     const updateUserProfile = (name, photo)=>{
       return updateProfile(auth.currentUser,{
               displayName:name, photoURL:photo
          })
     }

     const logOUt =()=>{
          setLoading(true)
          return signOut(auth)
     }

     useEffect(()=>{
         const unsubscribe = onAuthStateChanged(auth, currentUser=>{
               setUser(currentUser)
               console.log(currentUser);
               setLoading(false)
          })
          return ()=>{
                return unsubscribe ();
          }
         
     },[])

     const authInfo = {
       user,
       loading,
       createUser,
       loggedIn,
       signInGoogle,
       logOUt,
       updateUserProfile,
     };

     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
};

export default AuthProvider;