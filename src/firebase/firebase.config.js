// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEJBqkxj3PrpRcJzseyvQP4j2lF9DfW1s",
  authDomain: "login-auth-more.firebaseapp.com",
  projectId: "login-auth-more",
  storageBucket: "login-auth-more.appspot.com",
  messagingSenderId: "967072871541",
  appId: "1:967072871541:web:6f2f5f493a9c8e2719743c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;