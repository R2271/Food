
import { initializeApp } from "firebase/app";
import { getAuth, } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDAmz9tzSDTXlu_kZmOuYvd5RBUx3RMXTw",
  authDomain: "fooddetails-39c9e.firebaseapp.com",
  projectId: "fooddetails-39c9e",
  storageBucket: "fooddetails-39c9e.appspot.com",
  messagingSenderId: "216517147366",
  appId: "1:216517147366:web:1ccc34583ff9dd9b035927"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default app;