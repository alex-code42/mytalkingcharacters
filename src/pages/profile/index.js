import ProfileHeader from "@/components/Profile/Header"
import MyCreatedCharacters from "@/components/Profile/MyCharacters"
import Navbar from '@/components/Navbar';
import MyProfileCharacters from "@/components/Profile/MyCharacters";
import LoginComponent from "../login";


import { useSession, signIn, signOut } from "next-auth/react"

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
    <MyProfileCharacters/>
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


