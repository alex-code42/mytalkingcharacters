import mongoose from "mongoose";


const { Schema } = mongoose;

const conversationSchema = new Schema({
  character: { type: String},
  user: { type: String},
  question: { type: String},
  answer: { type: String},
  timestamp: { type: String},
  

});
// console.log("big Place",Place);
const Conversation = mongoose.models.Conversation || mongoose.model("Conversation", conversationSchema);

export default Conversation;
