// Import Firebase SDK modules
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Replace this with your Firebase project's configuration
const firebaseConfig = {
    apiKey: "AIzaSyCoJoVufH_E3kgcCkOE1bF-hv8zFapT1vs",
    authDomain: "nicos-project-eea29.firebaseapp.com",
    projectId: "nicos-project-eea29",
    storageBucket: "nicos-project-eea29.firebasestorage.app",
    messagingSenderId: "744859576138",
    appId: "1:744859576138:web:b1019ba2689d7fc64dc3b3",
    measurementId: "G-PJRT4L02VD"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
