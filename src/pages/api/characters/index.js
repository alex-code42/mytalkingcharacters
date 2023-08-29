import Character from "@/db/models/Character";
import dbConnect from "@/db/connect";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const characters = await Character.find();
    // console.log("Characters auf in API",characters);
    return response.status(200).json(characters);
  }
}
