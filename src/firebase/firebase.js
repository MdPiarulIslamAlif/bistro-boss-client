import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};

// const firebaseConfig = {
//   apiKey: "AIzaSyC2Bsy6POksbC58BD7lADMbdviVNL3Du5s",

//   authDomain: "bistro-boss-254d2.firebaseapp.com",

//   projectId: "bistro-boss-254d2",

//   storageBucket: "bistro-boss-254d2.appspot.com",

//   messagingSenderId: "880032735867",

//   appId: "1:880032735867:web:2ca2e3af60a42b81a078de",
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
