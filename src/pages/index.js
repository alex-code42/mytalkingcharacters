import { Inter } from 'next/font/google'
import CharacterList from '@/components/CharacterList'
import useSWR from "swr";
import useRouter from 'router';
import Link from 'next/link';
import Image from 'next/image';

import mypic from '/public/robot_with_flowers.png'


const router = useRouter();
const { isReady } = router;
const inter = Inter({ subsets: ['latin'] });


export default function Home() {

  const fetcher = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };

  const { data, error } = useSWR(`/api/characters`, fetcher);

  if (error) {
    console.error('Error fetching data:', error);
  }
  console.log("Here is my data on Characters",data);


  return (
    <>
      <h1>This is the Homepage</h1>
      <CharacterList  />
      <br></br>
      <Link href="/characters/">See the characters</Link>
      <h4>h4 überschrift</h4>
      <Image
            src={mypic}
            alt="Picture of the author"
            width={600}
            height={600}
    />
    </>
  );
}
