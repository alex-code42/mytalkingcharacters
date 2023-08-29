import useSWR from "swr";
import { useRouter } from "next/router";
import Image from 'next/image'
import Link from "next/link";
import mypic from '/public/guardian_monkey.png'

export default function CharacterList() {
  const router = useRouter();
  const { data } = useSWR("/api/characters");


  if (!data) {
    return <h1>Loading...</h1>;
  }
  
  console.log("mydata_in_characters",data);
  return (
    <>
      
      
        {data.map((character) => (
          <li key={character._id}>
            {/* <StyledButtonBUtton type="button" onClick={() => router.push(`/${character._id}`)}> */}
            <Link href={`/${character._id}`}>
            
              
              <Image
                src={mypic}
                width={500}
                height={500}
                quality={65}
                alt="Picture of the author"
                />
              {character.name}
              </Link>

          </li>
        ))}
     
    </>
  );
}