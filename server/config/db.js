import mongoose from "mongoose";
const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("connect");
  } catch (error) {
    console.log(error);
  }
};
export default connectMongo;
