// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqKsu2tylbcHR2FXvSlTvANNkbarw6uAs",
  authDomain: "glad-movie.firebaseapp.com",
  projectId: "glad-movie",
  storageBucket: "glad-movie.appspot.com",
  messagingSenderId: "140086181644",
  appId: "1:140086181644:web:0a64d10ced94ad2e949329",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
