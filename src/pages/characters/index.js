import { Inter } from 'next/font/google'
import CharacterList from '@/components/CharacterList'
import useSWR from "swr";
import useRouter from 'router';
import Link from 'next/link';

const router = useRouter();
const { isReady } = router;

const inter = Inter({ subsets: ['latin'] });



 

export default function Characters() {


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
      <h1>This is the Character-Page</h1>
      <CharacterList  />
      <Link href="/">Back Home</Link>
    </>
  );
}
