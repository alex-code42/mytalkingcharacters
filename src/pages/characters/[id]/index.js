import useSWR from "swr";
import { useRouter } from "next/router";
import Image from 'next/image'
import mypic from '/public/characters/guardian_monkey.png'
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CharacterCard from "@/components/Character";



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
  console.log("Here is my IMG-slug on [ID]",data.slug);


  // `/public/characters/${data.slug}.png`

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
        <CharacterCard data={data}/>


      

    </>
  );
}

