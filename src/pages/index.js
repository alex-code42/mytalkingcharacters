import { Inter } from 'next/font/google'
import CharacterList from '@/components/CharacterList'
import useSWR from "swr";
import useRouter from 'router';
// import Link from "next/link.js";

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
  console.log("Here is my data on Frontpage",data);
  
  
  return (
    <>
      <h1>Here are the Characters</h1>
      <CharacterList  />
    </>
  );
}
