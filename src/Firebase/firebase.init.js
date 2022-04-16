// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGt1uIi6tNMrSvUaHsENI-DsCKqPLnK0M",
  authDomain: "red-onion-d6021.firebaseapp.com",
  projectId: "red-onion-d6021",
  storageBucket: "red-onion-d6021.appspot.com",
  messagingSenderId: "701530243461",
  appId: "1:701530243461:web:0111195bc41642efdf44ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth= getAuth(app);

export default auth;