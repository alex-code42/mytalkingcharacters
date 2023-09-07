


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
  const animal = req.body.animal || '';
  if (animal.trim().length === 0) {
    res.status(400).json({
      error: {
        message: "Please enter a valid input",
      }
    });
    return;
  }
  const description = req.body.description

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      
      messages: [
        {
          "role": "system",
          "content": generatePrompt(animal,description)
        },
      ],
      temperature: 0.5,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

 
  res.status(200).json(response.choices[0].message.content);
    
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

function generatePrompt(animal,description) {
  const capitalizedAnimal =
    animal;
  const myDescription = description
    return `${myDescription} ${capitalizedAnimal}
   Job:`;
   }
