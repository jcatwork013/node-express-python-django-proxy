const User = require('../models/User');

class UserController {
  async getAllUsers(req, res) {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getUserById(req, res) {
    const userId = req.params.id;
    try {
      const user = await User.findByPk(userId);
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createUser(req, res) {
    const { name } = req.body;
    try {
      const newUser = await User.create({ name });
      res.json(newUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateUser(req, res) {
    const userId = req.params.id;
    const { name } = req.body;
    try {
      const [_, updatedUser] = await User.update({ name }, { where: { id: userId } });
      if (updatedUser === 0) {
        res.json(null);
      } else {
        const user = await User.findByPk(userId);
        res.json(user);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteUser(req, res) {
    const userId = req.params.id;
    try {
      const deletedUser = await User.destroy({ where: { id: userId } });
      if (deletedUser === 0) {
        res.json(null);
      } else {
        res.json({ id: userId });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = UserController;
