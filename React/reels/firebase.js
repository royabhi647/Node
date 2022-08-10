// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw5Bifl_cQkT3XFF142NDRoPJ6lvu7pTw",
  authDomain: "insta-reels-fjp5-2b660.firebaseapp.com",
  projectId: "insta-reels-fjp5-2b660",
  storageBucket: "insta-reels-fjp5-2b660.appspot.com",
  messagingSenderId: "409174861054",
  appId: "1:409174861054:web:20ed65531e60706f4d31af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { auth };