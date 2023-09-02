import mongoose from "mongoose";
import "./Review";

const { Schema } = mongoose;

const characterSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  weaknesses: { type: String},
  comparison: { type: String},
  attack: { type: String},
  leavingbehindtrail: { type: String},
  zodiac: { type: String},
  img: { type: String },
  mapURL: { type: String},
  slug: { type: String},
  reviews: { type: [Schema.Types.ObjectId], ref: "Review" },
});
// console.log("big Place",Place);
const Character = mongoose.models.Character || mongoose.model("Character", characterSchema);

export default Character;
