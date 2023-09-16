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
          <li className='' key={item.id}>
            
            <div className='text-right mt-4 mr-2 py-3 px-4 bg-transparent rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white border border-indigo-400 p-6 my-8 mx-8  shadow-xl ring-1 ring-indigo-600 '>
            {item.question}
            </div>
            <br></br>
           
            <div className='flex text-left ml-2 py-3 px-4 bg-transparent rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white border border-indigo-400 p-6 my-8 mx-8  shadow-xl ring-1 ring-indigo-600'>
            {item.answer.split('\n').map((element)=>(
              <p className='mb-6'> {element}</p>
            ))}
            </div>
            
            <br></br>
            </li>
        ))}
      </ul>
    </div>
        </>
      )
}
