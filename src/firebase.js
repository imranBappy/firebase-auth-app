// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYbEw5XWYvAyVur6TsIXmfFfavBmrXZfM",
  authDomain: "auth-app-81311.firebaseapp.com",
  databaseURL:
    "https://auth-app-81311-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "auth-app-81311",
  storageBucket: "auth-app-81311.appspot.com",
  messagingSenderId: "167318589034",
  appId: "1:167318589034:web:f5e34fbe672c5be8b10413",
  measurementId: "G-7BVXQBX67T",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
