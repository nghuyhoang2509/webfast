// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyJyeX8ex2rB5DSHBsYWpu1TA_Ihgni78",
  authDomain: "webfast2509.firebaseapp.com",
  projectId: "webfast2509",
  storageBucket: "webfast2509.appspot.com",
  messagingSenderId: "252260163741",
  appId: "1:252260163741:web:ae63c39914e53eb606b474",
  measurementId: "G-TN042L67BY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
