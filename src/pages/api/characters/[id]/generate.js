
const { MongoClient } = require("mongodb");

import dbConnect from "@/db/connect";
import Conversation from "@/db/models/Conversation";
// This code is for v4 of the openai package: npmjs.com/package/openai
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});


export default async function (req, res) {
if (req.method === "GET"){
  res.status(200).json("hallo brothers whats up.....");
}

console.log("huhu---->")
  // if (!configuration.apiKey) {
  //   res.status(500).json({
  //     error: {
  //       message: "OpenAI API key not configured, please follow instructions in README.md",
  //     }
  //   });
  //   return;
  // }
  const userInput = req.body.animal || '';
  if (userInput.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid input",
      }
    });
    return;
  }
  const description = req.body.description
  const id = req.body.id
  const userId = req.body.userId



  try {
  const conversation = [
    {
      role: "system",
      content: description // Add your system message content here
    },
    {
      role: "user",
      content: userInput // Add the user's input here
    }
  ];

// hier kommt der request

  // Make the API call with the conversation history
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: conversation,
    temperature: 0.5,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop: ["4"]
  });

  // Append the assistant's response to the conversation
  conversation.push({
    role: "assistant",
    content: response.choices[0].text
  });

  try {
    

    const db = await dbConnect()
    

    // Insert a conversation
    const newCollectionItem = await new Conversation({
      character: id,
      userId: userId,
      answer: response.choices[0].message.content,
      question: userInput,
      timestamp: new Date(),
    });
    await newCollectionItem.save()

     // Query conversations order by Timestamp
     console.log("the user ID before the search--->",userId);
     //Here i check if the user is logged in
     if (userId) {
     const conversations = await Conversation.find({ character: id,userId: userId }); // Assuming you have a Mongoose model named 'Conversation'
     // Now you can filter the conversations based on your condition
     console.log("These are the conversations-xxx-->>", conversations);
     res.status(200).json(conversations);
     }
     else{
      res.status(200).json(response.choices[0].message.content);
     }
     
   } finally {
    //  client.close();
   }


  
  
  // console.log("this is the response-message---->>>>",response.choices[0].message);
    
  } catch(error) {
    // Consider adjusting the error handling logic for your use case
    if (error.result) {
      console.error(error.result.status, error.result.data);
      res.status(error.result.status).json(error.result.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          error,
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}

// function generatePrompt(animal,description) {
//   const capitalizedAnimal =
//     animal;
//   const myDescription = description
//     return `${myDescription} ${capitalizedAnimal}
//    Job:`;
//    }
