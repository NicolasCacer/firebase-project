import express from 'express';        // Express.js framework
import dotenv from 'dotenv';         // dotenv to load environment variables
import userRouter from '../routes/userRoutes.js';

dotenv.config(); // Load environment variables

// Initialize Express app
const app = express();
const port = process.env.PORT || 3000; // Use the port from environment or default to 3000

// Middleware to parse JSON
app.use(express.json());

// Set routes for the server
//app.use('/users', userRouter);

// If in a local environment, start the Express server with app.listen
app.use((req, res) => {
  res.status(404).json({ message: "Ruta no encontrada" });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

export default app;
