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
  
  console.log("MySlug",data[0].img);
  return (
    <>
    <div className="flex flex-wrap gap-x-8 gap-y-4 justify-center  " >


        {data.map((character) => (
          <li key={character._id}>
        <div className="max-w-sm bg-transparent border border-gray-200  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href={`/characters/${character._id}`}>
              
            <Image
              src={character.img || 'https://res.cloudinary.com/dqbpcswn9/image/upload/v1695032484/tv5xnegitnaweckl5z1p.png'}  // Verify that character.img is correctly set to the image URL or file path
              decoding="async"
              data-nimg="1"
              width={400}
              height={400}
              quality={55}
              className="rounded-t-lg"
              alt="Placeholder Image"
            />
            </Link>
            <div className="p-5 ">
                <Link href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-100 dark:text-white">{character.name}</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-100 dark:text-gray-400">{character.description.substr(0, 80)}...</p>
                <Link href={`/characters/${character._id}`} className="mb-2 mt-2 bg-transparent hover:bg-blue-500 text-slate-100 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Let's have a chat
                    
                </Link>
            </div>
        </div>

          </li>
        ))}
     </div>
    </>
  );
}