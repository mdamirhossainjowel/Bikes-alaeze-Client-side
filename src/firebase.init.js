
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
//     apiKey: process.env.REACT_APP_APIKEY ,
//     authDomain: process.env.REACT_APP_AUTHDOMAIN ,
//     projectId: process.env.REACT_APP_PROJECTID ,
//     storageBucket: process.env.REACT_APP_STORAGEBUCKET ,
//     messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID ,
//     appId: process.env.REACT_APP_APPID ,
//   };
apiKey: "AIzaSyBKLZcXfi7SWNvK-xuPVYw7W3Ptxyksifw",
authDomain: "bikes-alaeze.firebaseapp.com",
projectId: "bikes-alaeze",
storageBucket: "bikes-alaeze.appspot.com",
messagingSenderId: "580771726043",
appId: "1:580771726043:web:44a64a12e6f8b75d2642fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);

export default auth;