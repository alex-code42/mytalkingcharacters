import dbConnect from "@/db/connect";
import Conversation from "@/db/models/Conversation";

export default async function handler(request, res) {
  await dbConnect();

  if (request.method === "GET") {
    // Assuming you want to filter conversations based on a condition, e.g., userId
    const { userId } = request.query;
    console.log("fsd----->>>>>>>>>>>",userId)

    try {
      // Modify the query to filter conversations based on your condition
      const conversations = await Conversation.find({ userId: userId });

      console.log("These are the conversations-xxx-->>", conversations);
      res.status(200).json(conversations);
    } catch (error) {
      console.error("Error fetching conversations:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
