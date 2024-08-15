import dotenv from 'dotenv'
import mongoose from 'mongoose';
dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`MongoDB Connexted : ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log("Connection Error".red.bold);
    process.exit();
  }
};

export default connectDB
