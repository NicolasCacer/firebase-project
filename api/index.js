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
app.use('/users', userRouter);

// If in a local environment, start the Express server with app.listen
if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`\nServer is running on http://localhost:${port}`);
  });
}

// Export serverless handler for deployment
export default app;
