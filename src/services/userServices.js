import { collection, getDocs, doc, getDoc, getFirestore } from 'firebase/firestore';
import firebaseConfig from '../config/firebaseConfig.js'; //import the firebase keys and secrets
import { initializeApp } from 'firebase/app';
import dotenv from 'dotenv';
dotenv.config();// Initialize the dotenv configuration to load .env variables

const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase);

// Service to fetch all users
export const getAllUsersService = async () => {
  const usersCollectionRef = collection(db, 'Users');
  const snapshot = await getDocs(usersCollectionRef);
  
  const users = [];
  snapshot.forEach((doc) => {
    users.push({ id: doc.id, ...doc.data() });
  });
  return users;
};

// Service to fetch a user by ID
export const getUserByIdService = async (userId) => {
  const userDocRef = doc(db, 'Users', userId);
  const docSnap = await getDoc(userDocRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  }
  return null;
};
