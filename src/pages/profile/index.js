
import MyCreatedCharacters from "@/components/Profile"
import Navbar from '@/components/Navbar';
import MyProfile from "@/components/Profile";
import LoginComponent from "../login";
import { useSession, signIn, signOut } from "next-auth/react"



import React from "react";
import useSWR from "swr";

export function MyOwnCharacterList() {
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

  return (
    <div>
      {/* Render your character list here */}
    </div>
  );
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
      <MyProfile session={session}/>
      <MyOwnCharacterList/>
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


