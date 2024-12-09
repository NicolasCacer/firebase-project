// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoJoVufH_E3kgcCkOE1bF-hv8zFapT1vs",
  authDomain: "nicos-project-eea29.firebaseapp.com",
  projectId: "nicos-project-eea29",
  storageBucket: "nicos-project-eea29.firebasestorage.app",
  messagingSenderId: "744859576138",
  appId: "1:744859576138:web:b1019ba2689d7fc64dc3b3",
  measurementId: "G-PJRT4L02VD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);