// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCg59hR-M-RZEmlalunzCxUV0ohwha5r4I",
  authDomain: "authentication-39224.firebaseapp.com",
  projectId: "authentication-39224",
  storageBucket: "authentication-39224.appspot.com",
  messagingSenderId: "88992348200",
  appId: "1:88992348200:web:86dbf07c96806ec10b1d1d",
  measurementId: "G-Y3YCQDGCL5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app, auth};