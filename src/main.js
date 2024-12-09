import { database } from "./firebase.js";
import { ref, onValue } from "firebase/database";

// Function to fetch data from a specific path in the database
const fetchData = (path) => {
  const dbRef = ref(database, path); // Reference to the database node
  onValue(dbRef, (snapshot) => {
    const data = snapshot.val(); // Extract the data
    console.log("Fetched Data:", data); // Log the data to the console
  });
};

// Example Usage: Fetch data from the "users" node
fetchData();

