import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link"
import React from "react"
import robotlogo from '/public/chatbot_logo.png'
import mypic2 from '/public/chatbot_logo.png'
import Image from "next/image"

console.log(robotlogo);

function GoogleLoginLink() {
  const googleLoginUrl = '/login'; // Replace with the actual Google login URL
  const callbackUrl = '/'; // Replace with your callback URL

  return (
    <Link to={`${googleLoginUrl}?callbackUrl=${callbackUrl}`}>
      Login with Google
    </Link>
  );
}

export default function LoginComponent() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
      
<div class="mx-auto w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-end px-4 pt-4">
        

    </div>
    <div class="flex flex-col items-center pb-10">
        <img class="w-32 h-32 mb-3 rounded-full shadow-lg" src={session.user.image} alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{session.user.name}</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">Logged In</span>
        <div class="flex mt-4 space-x-3 md:mt-6">
        <button onClick={() => signOut()} type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Sign out</button>
        </div>
    </div>
</div>

      </>
    )
  }
  return (
    <>

<div class="mx-auto w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-end px-4 pt-4">
        

    </div>
    <div class="flex flex-col items-center pb-10">
    <Image
            src={mypic2}
            alt="Picture of the author"
            width={80}
            height={80}
            className=" mx-auto"
      />
    
          <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{session?.user.name}</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">Please log in</span>
        <div class="flex mt-4 space-x-3 md:mt-6">
        <button onClick={() => signIn()} type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Sign In</button>
        </div>
    </div>
</div>

    
    </>
  )
}