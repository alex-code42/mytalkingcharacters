import mongoose from "mongoose";
import "./Review";

const { Schema } = mongoose;

const characterSchema = new Schema({
  name: { type: String },
  description: { type: String},
  // img: { type: String },
  mapURL: { type: String},
  reviews: [{ type: [Schema.Types.ObjectId], ref: "Review" }],
  userId: { type: String  },
  published: { type: Boolean },
});
// console.log("big Place",Place);
const Character = mongoose.models.Character || mongoose.model("Character", characterSchema);

export default Character;
