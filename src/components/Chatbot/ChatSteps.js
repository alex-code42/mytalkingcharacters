// components/ChatSteps.js
import { useSession } from "next-auth/react"


 





import React from 'react';

const ChatSteps = ({ result }) => {
  console.log("this is the result--->>>>>>>>>>>",result);
  
  // Check if result is an array before mapping
  
  
  // Split the result into separate steps using newline character '\n'
//   const steps = result.answer.split('\n');
// console.log(result)

  // Create a preformatted text block to display the steps
  const { data: session, status } = useSession()

  if (status === "authenticated") {

    if (!Array.isArray(result)) {
      return <div>Please type in. I will answer everything.</div>;
    }


  return (
    <div>
      <ul>
        {result.map((item) => (
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
  );
}

if (!result) {
  return <div>Please type in. I will answer everything.</div>;
}


return (
    <div>
    <div className='mb-6'>

            {result.split('\n').map((element)=>(
              <p className='mb-6'> {element}</p>
            ))}
            </div>
    </div>
  );
};



export default ChatSteps;
