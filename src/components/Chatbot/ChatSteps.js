// components/ChatSteps.js
import { useSession } from "next-auth/react"


 





import React from 'react';
import GetConversations from "./Conversations/conversations";

const ChatSteps = ({ result,id }) => {
  
  // Check if result is an array before mapping
  
  
  // Split the result into separate steps using newline character '\n'
//   const steps = result.answer.split('\n');
// console.log(result)

  // Create a preformatted text block to display the steps
  const { data: session, status } = useSession()

  if (status === "authenticated") {

    if (!Array.isArray(result)) {
      return(
      <div>
              <GetConversations id={id}/>
              </div>

      ) 
    }


  return (
    <div>
      <ul>
        {result.map((item) => (
          <li className='max-w-5xl mx-auto' key={item.id}>
            
            <div className=''>
            {item.question}
            </div>
            <br></br>
            <br></br>
            <div className='mb-6 border-2'>
            {item.answer.split('\n').map((element)=>(
             
             <div className='mb-6' key={item.id}> 
             {element}
             </div>

            ))}
            </div>
            <br></br>
            <br></br>
            </li>
        ))}
      </ul>
    </div>
  );
}

if (!result) {
  return <div className="flex text-left ml-2 py-3 px-4 bg-transparent rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white border border-indigo-400 p-6 my-8 mx-8  shadow-xl ring-1 ring-indigo-600">Please type in. I will answer everything.</div>;
}


return (
    <div>
    <div className='mb-6 text-left ml-2 py-3 px-4 bg-transparent rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white border border-indigo-400 p-6 my-8 mx-8  shadow-xl ring-1 ring-indigo-600'>

            {result.split('\n').map((element)=>(
              <div className='mb-6'key={element.id}>
              {element}
              </div>
            ))}
            </div>
    </div>
  );
};



export default ChatSteps;
