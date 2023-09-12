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
  console.log("Here is my data on Characters", data);


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

  if (status === "authenticated") {

 


        

    return (
      <>
          <Navbar/>
          <Form onSubmit={handleEditCharacter} formName={'Edit Character'} defaultData={data} />
          </>
            )
          
        
        } 
        return(
          <>

          <div className="mx-auto w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-end px-4 pt-4">
                  
          
              </div>
              <div className="flex flex-col items-center pb-10">
              <Image
                      src={mypic2}
                      alt="Picture of the author"
                      width={80}
                      height={80}
                      className=" mx-auto"
                />
              
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{session?.user.name}</h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Please log in</span>
                  <div className="flex mt-4 space-x-3 md:mt-6">
                  <button onClick={() => signIn()} type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Sign In</button>
                  </div>
              </div>
          </div>
          
              
              </>
        )
}