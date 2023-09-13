import { useRouter } from "next/router";
import useSWR from "swr";

import { useSession, signIn, signOut } from "next-auth/react"




export default function GetConversations({id}){

    const { data: session, status } = useSession()

    
    const userId = session.user.id

    const fetcher = async (url) => {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      };
    
      const { data, error } = useSWR(`/api/users/${userId}/conversations`, fetcher);
      if (error) {
        console.error('Error fetching dataaaaa:', error);
      }

      const filteredData = data?.filter(item => item.character === id);

      return(
        <>
        <div>
      <ul>
        {filteredData?.map((item) => (
          <li className='max-w-5xl mx-auto' key={item.id}>
            
            <div className='mb-6 border-b-4 border-indigo-500'>
            {item.question}
            </div>
            <br></br>
            <br></br>
            <div className='mb-6 border-2'>
            {item.answer.split('\n').map((element)=>(
              <p className='mb-6'> {element}</p>
            ))}
            </div>
            <br></br>
            <br></br>
            </li>
        ))}
      </ul>
    </div>
        </>
      )
}
