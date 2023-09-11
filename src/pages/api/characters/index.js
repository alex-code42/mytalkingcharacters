import Character from "@/db/models/Character";
import dbConnect from "@/db/connect";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const characters = await Character.find();
    // console.log("Characters auf in API",characters);
    return response.status(200).json(characters);
  }

  if (request.method === "POST") {
    try {
      const characterData = request.body;
      console.log("there is the character---->>>>>>>>>>",characterData);
      const character = new Character(characterData);
      

      await character.save();
    
  
      response.status(201).json({ status: "Character created" });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }

}
