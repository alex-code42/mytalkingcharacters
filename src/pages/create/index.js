import Form from "@/components/Edit";
import Navbar from "@/components/Navbar";
import useSWR from "swr";
import LoginComponent from "../login";

import { useSession, signIn, signOut } from "next-auth/react"
import ImageUplad from "@/components/ImageUpload";


export default function createCharacterPage() {
  const { data: session, status } = useSession()
  const userEmail = session?.user?.email

  const characters = useSWR("/api/characters");

  function handleImageUpload(resultEvent) {
    // Extract information about the uploaded image from the resultEvent.
    const { info, file } = resultEvent;
  
    // Access the details of the uploaded image.
    const publicId = info.public_id;
    const imageUrl = info.secure_url;
  
    // Log or display the image details as needed.
    console.log('Public ID:', publicId);
    console.log('Image URL:', imageUrl);
 
    
    // You can also update your UI with the image information if needed.
    // For example, display the image thumbnail or link.
  }

    async function addCharacter(event) {
      event.preventDefault()
   
      const formData = new FormData(event.target)
      const characterData = Object.fromEntries(formData)

      
      
      characterData.userId = session.user.id;
      characterData.published = false;
      

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
    return <p>Hang on there...</p>
  }

  if (status === "authenticated") {
    return (
      <>
      <Navbar/>
      <ImageUplad handleImageUpload={handleImageUpload}/>
      <Form onSubmit={addCharacter} formName={"Create Character"}/>
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


