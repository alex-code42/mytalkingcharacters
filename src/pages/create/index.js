import Form from "@/components/Edit";
import Navbar from "@/components/Navbar";
import useSWR from "swr";
import LoginComponent from "../login";
import { useState } from "react";
import Image from "next/image";
import Meta from "@/components/Meta";
import { useRouter } from 'next/router';


import { useSession, signIn, signOut } from "next-auth/react"
import ImageUplad from "@/components/ImageUpload";




const ImageComponent = ({ imageUrl }) => {
  // Check if imageUrl is provided
console.log("please show the image",imageUrl);
  if (!imageUrl) {
    return (
    <div className="container mx-auto content-center flex justify-center">
    {/* <h2 className="mt-1 text-sm leading-6 text-slate-100">There is no Image</h2> */}
  </div>)
  }

  return (
    <>
    <div className="container mx-auto mx-4 content-center flex justify-center">
      <Image
      src={imageUrl}
      width={450}
      height={450}
      alt="Picture of the author"  
      className=" mx-auto mx-auto  h-30 w-30 mt-8 rounded-full mx-4"
    />
    </div>
    </>
    
  );
};


export default function createCharacterPage() {
  const { data: session, status } = useSession()
  const userEmail = session?.user?.email
  const characters = useSWR("/api/characters");
  const router = useRouter();

  const [imageUrl, setImageUrl] = useState("https://res.cloudinary.com/dqbpcswn9/image/upload/v1695032484/tv5xnegitnaweckl5z1p.png");


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
      
      console.log("this is the character Data IMG",imageUrl)
      
    
      
      console.log("This is the character.data---->",characterData)
      router.push('/profile/');
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
        await response.json();
        characters.mutate();
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
        title="Create your personal Chatbots"
        description="Your page description goesDiscover chatbots with incredible character depth that can empathize, entertain, and assist you like never before."
        image="https://res.cloudinary.com/dqbpcswn9/image/upload/v1695049313/xqhnkmcfn0ts0gl2xu2f.png"
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


