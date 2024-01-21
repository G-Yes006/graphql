import mongoose, { ConnectOptions } from "mongoose";

const connectDB = async () => {
  try {
    const options: any = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    await mongoose.connect("mongodb://localhost:27017/graph-ql", options);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;
