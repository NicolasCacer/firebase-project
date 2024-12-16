import { Router } from 'express';
import { getAllUsers, getUserById } from '../controllers/userControllers.js';

const userRouter = Router();

// Route to fetch all users
userRouter.get('/', getAllUsers);

// Route to fetch a user by their ID
userRouter.get('/:id', getUserById);

export default userRouter;
