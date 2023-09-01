import Character from "@/db/models/Character";
import dbConnect from "@/db/connect";

export default async function handler(request, response) {
    await dbConnect();
    const { id } = request.query;
    console.log("Das ist die ID: ",id)
    if (request.method === "GET") {
      const character = await Character.findById(id);
      if (!character) {
        return response.status(404).json({ status: "Not Found" });
      }
      response.status(200).json(character);
    }
    if (request.method === "PUT") {
      const characterToUpdate = await Character.findByIdAndUpdate(id, {
        $set: request.body,
      });
      // Find the joke by its ID and update the content that is part of the request body!
      response.status(200).json(characterToUpdate);
      // If successful, you'll receive an OK status code.
    }
}