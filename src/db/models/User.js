import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  userId: { type: String, required: true },
  imageData: { type: String, },
  id: { type: String, },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;