// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfCGMw71g-xew8jqIag-zQ1lgHYWs8ExU",
  authDomain: "gym-trainer-2728e.firebaseapp.com",
  projectId: "gym-trainer-2728e",
  storageBucket: "gym-trainer-2728e.appspot.com",
  messagingSenderId: "62492307692",
  appId: "1:62492307692:web:709128705329de5992b5c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export default auth;