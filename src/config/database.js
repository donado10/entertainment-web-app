import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    return true;
  }

  try {
    await mongoose.connect(
      "mongodb+srv://kingenou:PBaN1Igpp3BLq9cC@cluster0.kw8gu.mongodb.net/entertainment_web_app",
    );
    console.log("Mongodb connecteda");
    return true;
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
