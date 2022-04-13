// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_oYmcV3GeGeC117odlPvT_7DVTYP8qng",
  authDomain: "metalurgica-claudio.firebaseapp.com",
  projectId: "metalurgica-claudio",
  storageBucket: "metalurgica-claudio.appspot.com",
  messagingSenderId: "747173822635",
  appId: "1:747173822635:web:6de1514a97511dd49837ee",
  measurementId: "G-NZVKJRRQ6G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const dataBase = getFirestore (app);