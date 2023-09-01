import React from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";
import useSWR from "swr";





export default function CharacterCard({data}){

  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;

  const { data: character, isLoading, error } = useSWR(`/api/characters/${id}`);

  if (!isReady || isLoading || error) return <h2>Loading...</h2>;

  async function deleteCharacter() {
    console.log("delete BUtton pushed")
    await fetch(`/api/characters/${id}`, {
      method: "DELETE",
    });
    // You are handing over the joke identified by its id to our DELETE request method.
    // This is the entire code required to do so.
    router.push("/characters/");
    // After deleting the joke, you route back to our index page.
  }
 
    
    return(
      <>
      <div className="my test">
  {/* <!-- FAQ --> */}
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  {/* <!-- Title --> */}
  <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
    <h2 class="text-2xl font-bold md:text-3xl md:leading-tight text-gray-800 dark:text-gray-200">
    {data.name}
    </h2>
  </div>
  {/* <!-- End Title --> */}
  
  <div class="max-w-5xl mx-auto">
    {/* <!-- Grid --> */}
    <div class="grid sm:grid-cols-2 gap-6 md:gap-12">
      <div>
        <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
          Attack:
        </h3>
        <p class="mt-2 text-gray-600 dark:text-gray-400">
            {data.attack}        </p>
      </div>
      {/* <!-- End Col --> */}
  
      <div>
        <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
          Comparison
        </h3>
        <p class="mt-2 text-gray-600 dark:text-gray-400">
        {data.comparison}        </p>
      </div>
      {/* <!-- End Col --> */}
  
      <div>
        <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
          Description
        </h3>
        <p class="mt-2 text-gray-600 dark:text-gray-400">
        {data.description}        </p>
      </div>
      {/* <!-- End Col --> */}
  
      <div>
        <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
          Leaving no trail behind
        </h3>
        <p class="mt-2 text-gray-600 dark:text-gray-400">
        {data.leavingbehindtrail}        </p>
      </div>
      {/* <!-- End Col --> */}
  
      <div>
        <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
          Weaknesses:
        </h3>
        <p class="mt-2 text-gray-600 dark:text-gray-400">
        {data.weaknesses}        </p>
      </div>
      {/* <!-- End Col --> */}
  
      <div>
        <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
          Zodiac Sign:
        </h3>
        <p class="mt-2 text-gray-600 dark:text-gray-400">
        {data.zodiac}        </p>
        <div className="mt-10 space-y-10"></div>

        <Link href={`${data._id}/edit/`} className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Edit</Link>
        
        <button onClick={deleteCharacter}
          type="button"
          className="m-5 rounded-md bg-red-600  px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Delete
        </button>
        <div className="mt-10 space-y-10"></div>
        </div>
      

      {/* <!-- End Col --> */}
      <div className="mt-20 space-y-20"></div>

    </div>
    {/* <!-- End Grid --> */}
  </div>
  </div>
  {/* <!-- End FAQ --> */}

  </div>
      </>
    )
  }