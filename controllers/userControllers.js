import {getUserByIdService, getAllUsersService} from '../services/userServices.js';

// Controller to fetch all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await getAllUsersService();
    if (users.length === 0) {
      return res.status(404).json({ message: 'No users found.' });
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

// Controller to fetch a user by their ID
export const getUserById = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await getUserByIdService(userId);
    if (!user) {
      return res.status(404).json({ message: `User with ID ${userId} not found.` });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user' });
  }
};
