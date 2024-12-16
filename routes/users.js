import { Router } from 'express';
import { getAllUsers, getUserById } from '../controllers/userControllers.js';

const userRouter = Router();

// Route to fetch all users
userRouter.get('/', (req, res) => {
    res.send('List of all users');
  });
  
// Define a route for getting a specific user by ID
userRouter.get('/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User details for user with ID: ${userId}`);
  });

export default userRouter;
