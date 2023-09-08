// components/ChatSteps.js

import React from 'react';

const ChatSteps = ({ result }) => {
  // Split the result into separate steps using newline character '\n'
  const steps = result.split('\n');
console.log(steps)

  // Create a preformatted text block to display the steps
 

  return (
    <div className="max-w-5xl mx-auto">
      {steps.map((element) => (
        <p className='mb-6'>{element}</p> 
    ))}
    </div>
  );
};



export default ChatSteps;
