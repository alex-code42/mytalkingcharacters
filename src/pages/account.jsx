import React from "react";
import { useSession, signOut, getSession } from "next-auth/react";

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

export const getServerSideProps = async (context) => {
    const session = await getSession(context)

    return{
        props: {session},
    }
}