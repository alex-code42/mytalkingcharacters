import mongoose from "mongoose";

const { Schema } = mongoose;

const reviewSchema = new Schema({
  _id: { type: String  },
  title: { type: String  },
  text: { type: String, },
  characterId: { type: String },
  userId: { type: String, required: true  },
  // characterId: { type: [Schema.Types.ObjectId], ref: "Character" },
});

const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);

export default Review;


