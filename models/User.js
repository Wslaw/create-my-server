import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    //и проверить может есть уже в БД такой email:
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const User = mongoose.model("users", userSchema);
console.log("Це є модель Usera => ", User);
export default User;
