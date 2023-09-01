import useSWR from "swr";
import { useRouter } from "next/router";
import Image from 'next/image'
import Link from "next/link";
import mypic from '/public/characters/guardian_monkey.png'

export default function CharacterList() {
  const router = useRouter();
  const { data } = useSWR("/api/characters");


  if (!data) {
    return <h1>Loading...</h1>;
  }
  
  console.log("mydata_in_characters",data);
  return (
    <>
    <div className="flex flex-wrap gap-x-8 gap-y-4 justify-center " >


        {data.map((character) => (
          <li key={character._id}>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href={`/characters/${character._id}`}>
                <Image
                src={mypic}
                width={500}
                height={500}
                quality={65}
                className="rounded-t-lg"
                alt="Picture of the author"
                />
            </Link>
            <div class="p-5">
                <Link href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{character.name}</h5>
                </Link>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{character.description}</p>
                <Link href={`/characters/${character._id}`} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </Link>
            </div>
        </div>

          </li>
        ))}
     </div>
    </>
  );
}