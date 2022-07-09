const mongoose = require('mongoose');

// mongo db connection
const connectMongoDB = async () => {
 try {
  const conn = await mongoose.connect(process.env.MONGODB_URI)
  console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline.bold)
 } catch (error) {
  console.log(error)
  process.exit(1)
 }
}

module.exports = connectMongoDB;