// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:"AIzaSyC5fRtwcV6gz3vjGn6KdfmCr4Ci3JIuqP0",
  authDomain: "mern-realestate-4474d.firebaseapp.com",
  projectId: "mern-realestate-4474d",
  storageBucket: "mern-realestate-4474d.appspot.com",
  messagingSenderId: "480512448793",
  appId: "1:480512448793:web:df5ffb9b1cc4ad18634d88"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);