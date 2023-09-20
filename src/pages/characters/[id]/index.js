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
import Meta from "@/components/Meta";





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

if (data.img === "" || data.img === "undefined"){
  console.log("we print now the characters image by default in frontend");
  data.img = "https://res.cloudinary.com/dqbpcswn9/image/upload/v1695032484/tv5xnegitnaweckl5z1p.png"
}



  return (
    <div className="bg-indigo-950">
      <Meta
        title="Hey Buddy, whats up."
        description="Talk with my Bot now and enjoy the conversation."
        image={data.img} 
      />
    <Navbar />
    <h2 className="text-center text-slate-100 mt-8 text-xl mb-2 font-semibold">{data.name}</h2> 
    <Image  
      src={data.img} 
      alt="Picture of rose"
      width={200}
      height={200}
      className=" mx-auto mx-auto h-30 w-30  rounded-full"
    />  
    
    <Chatbot id={data._id} initialDescription={data.description} />  
    {/* <CharacterCard data={data}/>
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <SessionCommentForm slug={data.slug} id={data._id} />
        <CommentsList reviews={data.reviews} id={data._id}/>
    </div> */}
    

  </div>
  );
}

