import mongoose from "mongoose";

const singupModel = new mongoose.Schema(
  {
    name: { type: String, require: true },
    age: { type: Number, require: true },
    email: { type: String, require:true, unique: true },
    password:{type:String, require:true}

  },
  { timestamps: true }
);

const SingUp = new mongoose.model("SingUp", singupModel);
export default SingUp;
