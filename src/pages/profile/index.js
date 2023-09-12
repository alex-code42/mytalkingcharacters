
import MyCreatedCharacters from "@/components/Profile"
import Navbar from '@/components/Navbar';
import MyProfile from "@/components/Profile";
import LoginComponent from "../login";
import { useSession, signIn, signOut } from "next-auth/react"
import mypic from '/public/chatbot_logo.png'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useSWR from "swr";
import { useRouter } from "next/router";

export function DeleteCard(){
  
    const router = useRouter();
    const { isReady } = router;
    const { id } = router.query;
  
    const { data: character, isLoading, error } = useSWR(`/api/characters/${id}`);
  
    if (!isReady || isLoading || error) return <h2>Loading...</h2>;
  
   }


export function MyOwnCharacterList() {

    const { data: session, status } = useSession()
  const userId = session?.user?.id
  console.log("This is the userId",userId);
  const fetcher = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };

  const { data, error } = useSWR(`/api/characters`, fetcher);

  if (error) {
    console.error('Error fetching data:', error);
  }
  console.log("Here is my data on Characters", data);
 
  console.log("Hello from the page");
  const filteredCharacters = data?.filter((id) => id.userId === userId);
  console.log(filteredCharacters);

  
  

  return (
    <div className="rounded-2xl border border-indigo-400 p-6 my-8 mx-8  shadow-xl ring-1 ring-indigo-600 sm:order-last sm:px-8 lg:p-12" >
              <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2  ">
          {filteredCharacters?.map((character) => (
            <li key={character._id}>
              <div className="flex items-center gap-x-6 ">
              <Link href={`/characters/${character._id}`}>
                <Image
                src={mypic}
                width={200}
                height={200}
                quality={65}
                className="rounded-t-lg"
                alt="Picture of the author"
                />
            </Link>
            <Link href={`/characters/${character._id}/edit`}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Edit
            </button>
                    
            </Link>
            
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-slate-100">{character.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-400 ">{character.description.substr(0, 30)}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
    </div>
  )
}






export default function MyProfilePage() {
  const { data: session, status } = useSession()
  const userEmail = session?.user?.email

  if (status === "loading") {
    return <p>Hang on there...</p>
  }

  if (status === "authenticated") {
    return (
      <>
      <Navbar/>
      <MyProfile session={session} />
      <MyOwnCharacterList />
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


