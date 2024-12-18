// firebase.js
const dotenv = require('dotenv');
dotenv.config();
const admin = require('firebase-admin');

// Importa las credenciales desde una variable de entorno para mayor seguridad
const serviceAccount = JSON.parse(process.env.FIREBASE_ADMIN_CREDENTIALS);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://nicos-project-eea29-default-rtdb.firebaseio.com"
});

const db = admin.firestore();

module.exports = db;