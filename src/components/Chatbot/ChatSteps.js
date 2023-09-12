// components/ChatSteps.js

import React from 'react';

const ChatSteps = ({ result }) => {
  console.log(result);
  
  // Check if result is an array before mapping
  if (!Array.isArray(result)) {
    return <div>Please type in. I will answer everything.</div>;
  }
  
  // Split the result into separate steps using newline character '\n'
//   const steps = result.answer.split('\n');
// console.log(result)

  // Create a preformatted text block to display the steps
 

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
};



export default ChatSteps;
