import { Inter } from 'next/font/google'
import CharacterList from '@/components/CharacterList'
import useSWR from "swr";
import useRouter from 'router';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Meta from '@/components/Meta';

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
    <Meta
        title="Discover chatbots with incredible character depth"
        description="Your page description goesDiscover chatbots with incredible character depth that can empathize, entertain, and assist you like never before."
        image="/public/chatbot_logo.png" // Replace with the URL to your image
      />
    
          <Navbar/>
          <div className=" mx-auto">
              <CharacterList />
          </div>
      
    </>
  );
}
