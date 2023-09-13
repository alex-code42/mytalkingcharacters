import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";
import Image from "next/image";
import loading from '/public/jim-carrey-jim-carrey-typing.gif'
import ChatSteps from "./ChatSteps";
import { useSession, signIn, signOut } from "next-auth/react"



export default function Chatbot({id, initialDescription}) {
  const [animalInput, setAnimalInput] = useState("");
  
  const [description, setDescription] = useState(initialDescription); 
  const [result, setResult] = useState("");
  const { data: session, status } = useSession()
  const [isLoading, setIsLoading] = useState(false); // Add a loading state
  console.log("iam printing the characterId in chatbot---->",id)
  console.log("iam printing my User ID->><<>>--->")
  const userId =session?.user.id

  
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
        body: JSON.stringify({ animal: animalInput, description, id, userId }),
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
  console.log("this is the result in the form----->>>>",result)
  return (
    <div>
      <Head>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="/dog.png" />
      </Head>

      {isLoading ? (
          <div className={styles.loading}>
            <br></br>
            <blockquote className="text-center text-slate-100 text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
             I am typing... Please wait a bit
            </blockquote>
            </div>
        ) : (
          <div className="rounded-2xl border border-indigo-400 p-6 my-8 mx-8  shadow-xl ring-1 ring-indigo-600 sm:order-last sm:px-8 lg:p-12">
             <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <div>
             <p className="text-slate-100 px-6 mb-12"><ChatSteps result={result} id={id}/></p>
             </div>
          </blockquote>
           
            </div>
        )}


      <main className="p-2 fixed bottom-0 left-0 z-50  w-full ">
        {/* <img src="/dog.png" className={styles.icon} /> */}
        

          <form onSubmit={onSubmit} className="">
              <label htmlFor="chat" className="sr-only">Your message</label>
              <div className="flex items-center px-3 py-5 -mb-2 bg-indigo-950 rounded-lg bg-gray-50 dark:bg-gray-700 rounded-2xl border border-indigo-400">
                  
                  <button type="button" className="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
            
                      <span className="sr-only">Add emoji</span>
                  </button>
                  <input id="chat" type="text"name="animal" value={animalInput}
            onChange={(e) => setAnimalInput(e.target.value)} rows="1" className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></input>
                      <button type="submit" className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
                      <svg className="w-5 h-5 rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                          <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z"/>
                      </svg>
                      <span className="sr-only">Send message</span>
                  </button>
              </div>
          </form>



      

      </main>
    </div>
  );
}
