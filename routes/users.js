import express from 'express'
import { getUserById, getAllUsers } from '../controllers/user.js';
const userRouter = express.Router();

userRouter.get('/', getAllUsers);
userRouter.get('/:id', getUserById);

export default userRouter;