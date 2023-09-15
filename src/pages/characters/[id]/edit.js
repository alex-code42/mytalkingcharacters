import useSWR from "swr";
import { useRouter } from 'next/router';
import useSWRMutation from "swr/mutation";
import Form from "@/components/Edit";
import { PhotoIcon } from '@heroicons/react/24/solid'
import Navbar from "@/components/Navbar";
import { useSession, signIn, signOut } from "next-auth/react"
import mypic2 from '/public/chatbot_logo.png'
import Image from "next/image";
import ImageUplad from "@/components/ImageUpload";
import { useState } from "react";



const ImageComponent = ({ imageUrl,defaultData }) => {
  // Check if imageUrl is provided
  console.log("please show the default Data",defaultData.img);
console.log("please show the image-->>>",imageUrl);
if (imageUrl) {
  return (
    <>
      <h2>There is an image---</h2>
      <Image
      src={imageUrl}
      width={400}
      height={400}
      alt="Picture of the author"
    />
    </>
  );
}  

if (!defaultData.img) {
    return (<h2>There is no Image</h2>); // If no imageUrl, display nothing
  }

  return (
    <>
      <h2>There is an image---</h2>
      <Image
      src={defaultData.img}
      width={400}
      height={400}
      alt="Picture of the author"
    />
    </>
  );
};





export default function EditPage() {

  const { data: session, status } = useSession()
  const [imageUrl, setImageUrl] = useState("");

  // console.log("This is the Session---><<<>>",session.user.id);

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
  
    
    // You can also update your UI with the image information if needed.
    // For example, display the image thumbnail or link.
  }

  const fetcher = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };
 
  const router = useRouter();
  const { isReady, push } = router;
  const { id } = router.query;

  console.log("this is the id in [EDIT]",id)

  const { data, error } = useSWR(`/api/characters/${id}`, fetcher);

  if (error) {
    console.error('Error fetching data:', error);
  }
  console.log("Here is my data on Characters in the Session--->>>", data?.userId);


  const { trigger, isMutating } = useSWRMutation(
    `/api/characters/${id}`,
    sendRequest
  );


    async function handleEditCharacter(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const characterData = Object.fromEntries(formData);
        characterData.img = imageUrl;
        // Here you are preparing your updated data to be handed over to your sendRequest function.
        trigger(characterData);
    // By calling trigger with our jokeData object, you provide your `sendRequest` function with the necessary `arg` object.
    push(`/characters/${id}`);
  }
  async function sendRequest(url, { arg }) {
    // The sendRequest function expects url and { arg } as parameters.
    // This naming convention isn't unintentional. It needs to be named like that.
    // This has to do with how useSWRMutation works.
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(arg),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // This syntax follows that of any regular HTTP response.
    // Note the arg object that is passed as part of the response body.
    if (response.ok) {
      await response.json();
    } else {
      console.error(`Error: ${response.status}`);
    }
  }
  // console.log('Character edited-------->><<>>', character);

  if (status === "authenticated" && session.user.id == data?.userId) {

 


        

    return (
      <>
          <Navbar/>
          <ImageUplad handleImageUpload={handleImageUpload}/>
          <ImageComponent defaultData={data} imageUrl={imageUrl}/>
          <Form onSubmit={handleEditCharacter} formName={'Edit Character'} defaultData={data} />
          </>
            )
          
        
        } 
        return(
          <>
              <Navbar/>
            
<div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
            <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                <div className="relative">
                    <div className="absolute">
                        <div className="">
                            <h1 className="my-2 text-gray-800 font-bold text-2xl">
                                hallo
                            </h1>
                            <p className="my-2 text-gray-800"></p>
                        </div>
                    </div>
                    <div>
                        404
                    </div>
                </div>  
            </div>
            <div>
                404
            </div>
        </div>
              </>
        )
}