import useSWR from "swr";
import { useRouter } from "next/router";
import Image from 'next/image'
import Link from "next/link";
import mypic from '/public/chatbot_logo.png'

export default function CharacterList() {
  const router = useRouter();
  const { data } = useSWR("/api/characters");


  if (!data) {
    return <h1>Loading...</h1>;
  }
  
  console.log("MySlug",data[0].slug);
  return (
    <>
    <div className="flex flex-wrap gap-x-8 gap-y-4 justify-center  " >


        {data.map((character) => (
          <li key={character._id}>
        <div className="max-w-sm bg-white border border-gray-200  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href={`/characters/${character._id}`}>
            <Image
              src={`/characters/${character.slug}.png`}  // Verify that character.img is correctly set to the image URL or file path
              decoding="async"
              data-nimg="1"
              width={500}
              height={500}
              quality={65}
              className="rounded-t-lg"
              alt="Picture of the author"
            />
            </Link>
            <div className="p-5 ">
                <Link href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{character.name}</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{character.description.substr(0, 90)}...</p>
                <Link href={`/characters/${character._id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    
                </Link>
            </div>
        </div>

          </li>
        ))}
     </div>
    </>
  );
}