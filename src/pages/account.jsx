import React from "react";
import { useSession,signIn, signOut, getSession } from "next-auth/react";
import Link from "next/link";

const callbackUrl = "/login"

export default function Account() {
  const { data: session, status } = useSession()
  if (status=== "authenticated") {
    return (
      <>
      <div>
            Signed in as {session.user.email} <br />
            <button onClick={() => signOut()}>Sign out</button>
        </div>
      </>
    )
  }
  return (
    <>
    <div>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
      </div>
    </>
  )
}

export function NavbarAccountCheck() {
    const { data: session, status } = useSession()
    if (status=== "authenticated") {
      return (
        <>
        <div>
              <button onClick={() => signOut()}>{session.user.name} <br></br>Sign out</button>
          </div>
        </>
      )
    }
    return (
      <>
       <div>
              <button onClick={() => signIn()}>Sign In</button>
          </div>
      </>
    )
  }



export const getServerSideProps = async (context) => {
    const session = await getSession(context)


    if (!session){
        return{
            redirect:{
                destination: "/login",
            }
        }
    }

    return{
        props: {session},
    }
}