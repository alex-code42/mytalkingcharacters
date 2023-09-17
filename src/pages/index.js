import { Inter } from 'next/font/google'
import useSWR from "swr";
import useRouter from 'router';
import Navbar from '@/components/Navbar';
import LoginComponent from './login';
import HeroSection from '@/components/HeroSection';
import ContentSection1 from '@/components/ContentSection';
import Meta from '../components/Meta';
import Header2 from '@/components/Header2';
import Header3 from '@/components/Header3';






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
      <Meta
        title="YourChatBuddy.com - Chatbots that feel like your favorite companions"
        description="Discover chatbots with incredible character depth that can empathize, entertain, and assist you like never before."
        image="/public/chatbot_logo.png" // Replace with the URL to your image
      />
    <Navbar/>
    <Header2/>
    <ContentSection1/>
    <HeroSection/>
    <Header3/>
    
    
    
    <LoginComponent/>

    </div>
  );
}
