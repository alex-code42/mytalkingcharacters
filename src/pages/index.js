import { Inter } from 'next/font/google'
import CharacterList from '@/components/CharacterList'
import useSWR from "swr";
import useRouter from 'router';
import Link from 'next/link';
import Image from 'next/image';

import Navbar from '@/components/Navbar';

import mypic from '/public/robot_with_flowers.png'
import mypic2 from '/public/uhrzeit.png'
import CreateCharacterForm from '@/components/CharacterForm';



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
    <Navbar/>
      <Image
            src={mypic2}
            alt="Picture of the author"
            width={1400}
            height={1400}
      />
      <CreateCharacterForm/>
            <Image
            src={mypic2}
            alt="Picture of the author"
            width={1400}
            height={1400}
      />
   

    </>
  );
}
