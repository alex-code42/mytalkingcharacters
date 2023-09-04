import useSWR from "swr";

export default function CommentForm(slug ) {
    // const { artPiecesInfo, setArtPiecesInfo } = artPiecesState;
    // if (!artPiecesInfo) {
    //   return <div>loading</div>;
    
    // console.log("wtf:", artPiecesInfo);
    const reviews = useSWR("/api/reviews");

    console.log("this is the slug",slug);
    async function handleSubmit(event) {
      event.preventDefault();
    //   console.log("handleSubmit:", artPiecesInfo);
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData);
      console.log("The comment", data.title);
      const response = await fetch("/api/reviews", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      // Here we're using the API route we've built earlier.
      // We're declaring a response returning a promise while we're posting to our database.
  
      // Here we're using fetch and not swr, because swr is for data fetching, and not data mutation.
      // ... but we can notify swr about data changes using the mutate function! (See below.)
  
      // Our method is post, the body contains our jokeData JSON, and our header provides additional information about the data we're sending.
  
      // Our joke is on its way!
  
      if (response.ok) {
        // If our attempt at posting our joke is a success, we proceed here.
        await response.json();
        // At this point, the promise of response has resolved.
        reviews.mutate();
        // Now we're notifying swr that our data has been mutated, which will trigger a rerender.
        // If we don't include this line, the page won't automatically refresh and our submitted joke won't be immediately visible.
        event.target.reset();
      } else {
        console.error(`Error: ${response.status}`);
      }

      
    }
    
    return (

    <>
    
<form action=""
        method="post"
        onSubmit={handleSubmit}>
            <div>
            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title:</label>
            <input type="text" id="title"  name="title" className="block mb-3 w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>
        <label htmlFor="rating" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rate this Bot</label>
              <select type="number" id="rating" name="rating" className="bg-gray-50 mb-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
   <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">

        
       
       <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
           <label htmlFor="text" className="sr-only">Your comment</label>
           <textarea name="text"  id="text" rows="4" className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a comment..." required></textarea>
       </div>
       <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
           <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
               Post comment
           </button>
           <div className="flex pl-0 space-x-1 sm:pl-2">

           </div>
       </div>
   </div>
</form>
{/* <p className="ml-auto text-xs text-gray-500 dark:text-gray-400">Remember, contributions to this topic should follow our <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">Community Guidelines</a>.</p> */}

    </>
    );
  }
