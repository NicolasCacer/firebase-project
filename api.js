import { database, ref, onValue } from './firebase';

// Replace 'your-node-path' with the path you see in the URL (e.g., "users", "orders")
const dbRef = ref(database, 'your-node-path');

// Fetch data in real-time
onValue(dbRef, (snapshot) => {
    const data = snapshot.val();
    console.log("Fetched Data:", data);
});
