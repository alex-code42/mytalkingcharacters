import useSWR from "swr";
import { useRouter } from 'next/router';
import useSWRMutation from "swr/mutation";
import Form from "@/components/Edit";
import { PhotoIcon } from '@heroicons/react/24/solid'
import Navbar from "@/components/Navbar";
import { useSession, signIn, signOut } from "next-auth/react"
import mypic2 from '/public/chatbot_logo.png'
import Image from "next/image";



export default function EditPage() {

  const { data: session, status } = useSession()

  // console.log("This is the Session---><<<>>",session.user.id);

  

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
                                
                            </h1>
                            <p className="my-2 text-gray-800"></p>
                        </div>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
                    </div>
                </div>
            </div>
            <div>
                <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
            </div>
        </div>
              </>
        )
}