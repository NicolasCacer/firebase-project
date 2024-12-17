import {getUserByIdService, getAllUsersService} from '../services/userServices.js';

class userController{
  static async getAllUsers(req, res, next){
    try {
      const users = await getAllUsersService();
      if (users.length === 0) {
        return res.status(404).json({ message: 'No users found.' });
      }
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch users' });
    }
  }
  static async get(req, res, next){
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
  }
};

export default userController;
