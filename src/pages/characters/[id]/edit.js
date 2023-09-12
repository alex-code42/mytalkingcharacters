import useSWR from "swr";
import { useRouter } from 'next/router';
import useSWRMutation from "swr/mutation";
import Form from "@/components/CharacterForm";
import { PhotoIcon } from '@heroicons/react/24/solid'
import Navbar from "@/components/Navbar";


export default function EditPage() {

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

      


        

    return (
      <>
          <Navbar/>
          <Form onSubmit={handleEditCharacter} formName={'Edit Character'} defaultData={data} />
          </>
            )
          }
        
        
