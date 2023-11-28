import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb://0.0.0.0:27017/todo-app?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.1"
    );
    console.log("Database Connected");
  } catch (error) {
    throw new Error("Error while connecting to the DB");
  }
};
