const mongoose = require('mongoose');
require('dotenv').config();

const createUser = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Create a simple user collection (if needed for future reference)
    const userSchema = new mongoose.Schema({
      username: String,
      password: String,
      role: String,
      createdAt: Date,
    });

    const User = mongoose. model('User', userSchema);

    // Create admin user
    const adminUser = await User.create({
      username: 'admin',
      password:  'Admin123456', // In production, hash this! 
      role: 'admin',
      createdAt: new Date(),
    });

    console.log('Admin user created:', adminUser);
    process.exit(0);
  } catch (error) {
    console.log('Error:', error. message);
    process.exit(1);
  }
};

createUser();