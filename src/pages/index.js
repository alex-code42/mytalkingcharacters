import { Inter } from 'next/font/google'
import useSWR from "swr";
import useRouter from 'router';
import Navbar from '@/components/Navbar';
import LoginComponent from './login';
import HeroSection from '@/components/HeroSection';
import ContentSection1 from '@/components/ContentSection';



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


  return (
    <div className=" mx-auto">
    <Navbar/>
    <HeroSection/>
    <ContentSection1/>
    <LoginComponent/>

    </div>
  );
}
