import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";
import Image from "next/image";
import loading from '/public/jim-carrey-jim-carrey-typing.gif'


export default function Chatbot({id, initialDescription}) {
  const [animalInput, setAnimalInput] = useState("");
  
  const [description, setDescription] = useState(initialDescription); 
  const [result, setResult] = useState();
  const [isLoading, setIsLoading] = useState(false); // Add a loading state
  console.log("iam printing the Id in chatbot---->",id)

  
  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true); // Set isLoading to true when starting the request
    console.log("animalInput--------->",animalInput)
    console.log("Description--------->", description)
    

    

    try {
      const response = await fetch(`/api/characters/${id}/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ animal: animalInput, description }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }
      setResult(data);
      setAnimalInput("");
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    } finally {
      setIsLoading(false); // Set isLoading to false when the request is complete
    }
  }

  return (
    <div>
      <Head>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      <main className={styles.main}>
        {/* <img src="/dog.png" className={styles.icon} /> */}
        <h3>Let's have a chat</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="animal"
            placeholder="Type in here..."
            value={animalInput}
            onChange={(e) => setAnimalInput(e.target.value)}
          />
          <input type="submit" value="Chat with me" />
        </form>
        {/* Conditional rendering based on isLoading */}
        {isLoading ? (
          <div className={styles.loading}>
            <br></br>
            <Image className="w-full rounded-lg" src={loading} alt="office content 1"/>
            </div>
        ) : (
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            
            <p class="text-2xl text-gray-900 dark:text-white">{result}</p>
            
            
            </div>
        )}
      </main>
    </div>
  );
}
