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
    <Navbar/>
    
          <Image  
            src={mypic}
            alt="Picture of rose"
            width={700}
            height={700}
          />
          <br></br>
        <Link href="/characters/">See the characters</Link>
      <p>
        <h3>Name</h3>
        {data.name}
      </p>
      <p>
        <h3>Attack</h3>
        {data.attack}
      </p>
      <p>
        <h3>Comparison</h3>
        {data.comparison}
      </p>
      <p>
        <h3>Desciption</h3>
        {data.description}
      </p>
      <p>
        <h3>Leaving no trail behind</h3>
        {data.leavingbehindtrail}
      </p>
      <p>
        <h3>Weaknesses</h3>
        {data.weaknesses}
      </p>
      <p>
        <h3>Zodiac</h3>
        {data.zodiac}
      </p>

    </>
  );
}