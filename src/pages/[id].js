import useSWR from "swr";
import { useRouter } from "next/router";
import Image from 'next/image'
import mypic from '/public/guardian_monkey.png'
import Link from "next/link";
import Navbar from "@/components/Navbar";



export default function Character() {

  const router = useRouter();
  const { id } = router.query;
  console.log("this is the id in [ID]",id)
  
  const fetcher = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };

  const { data, error } = useSWR(`/api/characters/${id}`, fetcher);

  if (!data) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    console.error('Error fetching data:', error);
  }
  console.log("Here is my IMG-url on [ID]",data.img);


  return (
    <>
    <Navbar />
    
          <Image  
            src={mypic}
            alt="Picture of rose"
            width={1000}
            height={1000}
            className=" mx-auto"
          />


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
      </div>
      {/* <!-- End Col --> */}
    </div>
    {/* <!-- End Grid --> */}
  </div>
</div>
{/* <!-- End FAQ --> */}

</div>
      

    </>
  );
}