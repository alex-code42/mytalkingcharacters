import Image from 'next/image';

import useSWR, { useSWRConfig } from 'swr'




export default function CommentsList({ reviews,id }) {
  
  const { mutate } = useSWRConfig()
  
  const fetcher = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };
  // console.log(data)
  const { data, error } = useSWR(`/api/reviews`, fetcher);

  if (!data) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    console.error('Error fetching data:', error);
  }

  console.log("Here are my reviews in comment List",data);
  console.log("Here is my Character ID in comment List",id)
 
  const specificId = id; // Replace with the ID you're looking for

    const filteredData = data.filter((review) => review.characterId === specificId);

   


    async function handleDeleteJoke(review) {
      console.log("this is the review id",review._id)
      await fetch(`/api/reviews/${review._id}`, {
        method: "DELETE",
      });
      mutate('/api/reviews')
      // You are handing over the joke identified by its id to our DELETE request method.
      // This is the entire code required to do so.

      
      
      // data.push(`/reviews/${review._id}`);
      // After deleting the joke, you route back to our index page.

    }

  return (
    <div>
      <h3>Comments</h3>
      <ul role="list" className="divide-y divide-gray-100">
        {filteredData.map((review) => (
          <li key={review._id} className="py-5">
            <div className="flex justify-between gap-x-6">
              <div className="flex min-w-0 gap-x-4">
                <Image
                  className="h-12 w-12 flex-none rounded-full bg-gray-50"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  width={48}
                  height={48}
                />
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {review.title}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {review.text}
                  </p>
                </div>
              </div>
              <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
              <button  type="button" onClick={() => handleDeleteJoke(review)} className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Delete</button>

              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
