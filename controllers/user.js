import { getUserByIdService, getAllUsersService } from '../services/userServices.js';

export const getAllUsers = async (req, res) => {
    try {
      const users = await getAllUsersService();
      if (users.length === 0) {
        res.status(404).json({ error: 'Users not found' });
      }
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch users' });
    }
  }

export const getUserById = async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await getUserByIdService(userId);
      if (!user) {
        res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch user' });
    }
  }
