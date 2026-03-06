// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvIzjUkyONa_EYpYJZOVd0o0EqdCtH3TY",
  authDomain: "miportafolio-9101d.firebaseapp.com",
  projectId: "miportafolio-9101d",
  storageBucket: "miportafolio-9101d.firebasestorage.app",
  messagingSenderId: "79614377577",
  appId: "1:79614377577:web:1d8d2c1867a10e3bc6acf8",
  measurementId: "G-SS1MR7XV1K"
};

// Initialize Firebase
export const appfire = initializeApp(firebaseConfig);
export const analytics = getAnalytics(appfire);