import mongoose from "mongoose";

const { Schema } = mongoose;

const reviewSchema = new Schema({
  title: { type: String  },
  text: { type: String, },
  rating: { type: Number },
  characterId: { type: String },
  userId: { type: String },
  // characterId: { type: [Schema.Types.ObjectId], ref: "Character" },
});

const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);

export default Review;
