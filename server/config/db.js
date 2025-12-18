const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log('🔄 Connecting to MongoDB.. .');
    
    await mongoose. connect(process.env.MONGODB_URI);
    
    console.log('✅ MongoDB Connected Successfully');
  } catch (error) {
    console.log('❌ Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;