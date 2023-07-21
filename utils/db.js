import mongoose from "mongoose";

const connect = async () => {
  console.log("data base Connectin")
  try {
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;