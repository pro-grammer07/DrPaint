import mongoose from "mongoose";
import * as dotenv from "dotenv";

// Loading environment variables from .env file
dotenv.config();

const dbConnection = async () => {
  try {
    const dbURI = process.env.MONGODB_URL;
    if (!dbURI) {
      console.log("MONGODB_URL is not defined in environment variables");
    }

    const connection = await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("DB Connected Successfully");
  } catch (error) {
    console.log("DB Error: " + error);
  }
};

export default dbConnection;
