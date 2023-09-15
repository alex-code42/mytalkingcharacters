import useSWR from "swr";
import { useRouter } from "next/router";
import Image from 'next/image'
import mypic from '/public/chatbot_logo.png'
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CharacterCard from "@/components/CharacterCard";
import CommentsList from "@/components/CommentList";
import CommentForm from "@/components/CommentForm";
import { SessionCommentForm } from "@/components/CommentForm";
import Chatbot from "@/components/Chatbot";





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

  

  
  console.log("Here is my IMG-url on [ID]--->>>",data.img);
  console.log("Here is my Comments on [ID]",data.reviews);


  // `/public/characters/${data.slug}.png`

  return (
    <div className="bg-indigo-950">
    <Navbar />
    
    <Image  
      src={data.img} 
      alt="Picture of rose"
      width={200}
      height={200}
      className=" mx-auto mx-auto h-30 w-30 mt-8 rounded-full"
    />  
    <h2 className=" mx-auto text-slate-100">{data.name}</h2> 
    <Chatbot id={data._id} initialDescription={data.description} />  
    {/* <CharacterCard data={data}/>
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <SessionCommentForm slug={data.slug} id={data._id} />
        <CommentsList reviews={data.reviews} id={data._id}/>
    </div> */}
    

  </div>
  );
}

