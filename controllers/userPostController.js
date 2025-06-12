const { User, Post } = require('../models');

// Create a new user with posts
exports.createUserWithPosts = async (req, res) => {
  try {
    const { name, email, posts } = req.body;

    const user = await User.create(
      {
        name,
        email,
        Posts: posts, // Array of post objects
      },
      {
        include: [Post], // Include Post model in creation
      }
    );

    res.status(201).json(user);
  } catch (error) {
    console.error('Error creating user with posts:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get all users with their posts
exports.getUsersWithPosts = async (req, res) => {
  try {
    const users = await User.findAll({
      include: [Post],
    });

    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users with posts:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
