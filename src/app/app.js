// Import necessary modules
import express from 'express'; // Express.js framework
import { initializeApp } from 'firebase/app';   // Firebase app initialization
import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore'; // Firestore functions
import dotenv from 'dotenv'; // dotenv to load environment variables

// Initialize the dotenv configuration to load .env variables
dotenv.config();

// Initialize Express app
const app = express();
const port = process.env.PORT || 3000; // Set the port to use from environment or default to 3000

// Firebase configuration from environment variables
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase app
const appFirebase = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(appFirebase);

// Route to fetch all users
app.get('/users', async (req, res) => {
  try {
    // Reference to the 'Users' collection in Firestore
    const usersCollectionRef = collection(db, "Users");

    // Fetch all documents in the 'Users' collection
    const snapshot = await getDocs(usersCollectionRef);

    // Check if the collection is empty
    if (snapshot.empty) {
      return res.status(404).json({ message: "No users found." });
    }

    // Store all user data in an array
    const users = [];
    snapshot.forEach((doc) => {
      users.push({ id: doc.id, ...doc.data() });
    });

    // Send the user data as a JSON response
    res.status(200).json(users);
  } catch (error) {
    // Catch and send error response
    console.error("Error getting users:", error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// Route to fetch a user by their ID
app.get('/users/:id', async (req, res) => {
  const userId = req.params.id; // Get the user ID from the URL parameter

  try {
    // Reference to the specific user document in the 'Users' collection
    const userDocRef = doc(db, "Users", userId);

    // Fetch the user document by ID
    const docSnap = await getDoc(userDocRef);

    // Check if the user document exists
    if (!docSnap.exists()) {
      return res.status(404).json({ message: `User with ID ${userId} not found.` });
    }

    // Send the user data as a JSON response
    res.status(200).json({ id: docSnap.id, ...docSnap.data() });
  } catch (error) {
    // Catch and send error response
    console.error("Error getting user:", error);
    res.status(500).json({ error: "Failed to fetch user" });
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`\nServer is running on http://localhost:${port}`);
});
