import Form from "@/components/Edit";
import Navbar from "@/components/Navbar";
import useSWR from "swr";
import LoginComponent from "../login";
import { useState } from "react";
import Image from "next/image";
import Meta from "@/components/Meta";

import { useSession, signIn, signOut } from "next-auth/react"
import ImageUplad from "@/components/ImageUpload";




const ImageComponent = ({ imageUrl }) => {
  // Check if imageUrl is provided
console.log("please show the image",imageUrl);
  if (!imageUrl) {
    return (<h2>There is no Image</h2>); // If no imageUrl, display nothing
  }

  return (
    <>
      <h2>There is an image---</h2>
      <Image
      src={imageUrl}
      width={500}
      height={500}
      alt="Picture of the author"
    />
    </>
  );
};


export default function createCharacterPage() {
  const { data: session, status } = useSession()
  const userEmail = session?.user?.email
  const characters = useSWR("/api/characters");

  const [imageUrl, setImageUrl] = useState();


  function handleImageUpload(resultEvent) {
    // Extract information about the uploaded image from the resultEvent.
    const { info, file } = resultEvent;
  
    // Access the details of the uploaded image.
    const publicId = info.public_id;
    const imageUrl = info.secure_url;
    setImageUrl(imageUrl)
    // Log or display the image details as needed.
    console.log('Public ID:', publicId);
    console.log('Image URL:', imageUrl);


   
    

 
    return(
      <div>
        <h2>hallloi</h2>
      </div>
    )
    // You can also update your UI with the image information if needed.
    // For example, display the image thumbnail or link.
  }

    async function addCharacter(event) {
      event.preventDefault()
   console.log("this issssssssssss",imageUrl);
      const formData = new FormData(event.target)
      formData.append("img", imageUrl);
      const characterData = Object.fromEntries(formData)

      
      
      characterData.userId = session.user.id;
      characterData.published = false;
      // characterData.img = imageUrl;
      
      console.log("this is the character Data IMG",imageUrl)
      
    
      
      console.log("This is the character.data---->",characterData)
      const response = await fetch("/api/characters", {
        
        method: "POST",
        body: JSON.stringify(
          characterData,
          ),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        // If our attempt at posting our joke is a success, we proceed here.
        await response.json();
        // At this point, the promise of response has resolved.
        characters.mutate();
        // Now we're notifying swr that our data has been mutated, which will trigger a rerender.
        // If we don't include this line, the page won't automatically refresh and our submitted joke won't be immediately visible.
        event.target.reset();
      } else {
        console.error(`Error: ${response.status}`);
      }
    }

    
  

  if (status === "loading") {
    return <p>Hang on thedsdfsdfsdfre...</p>
  }

  if (status === "authenticated") {
    return (
      <>
      <Meta
        title="Create your Chatbots"
        description="Your page description goesDiscover chatbots with incredible character depth that can empathize, entertain, and assist you like never before."
        image="/public/chatbot_logo.png" // Replace with the URL to your image
      />
      <Navbar/>
      
      <ImageUplad handleImageUpload={handleImageUpload}/>
      <ImageComponent imageUrl={imageUrl}/>
      <Form onSubmit={addCharacter} formName={"Create Character"}  />
      </>
    )
  }

  return (
    <>
    <Navbar/>
      <LoginComponent/>
        
    </>
  )
}


