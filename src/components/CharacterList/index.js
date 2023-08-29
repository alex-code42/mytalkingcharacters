import useSWR from "swr";
import { useRouter } from "next/router";
import Image from 'next/image'

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
            <button type="button"
              onClick={() => router.push(`/${character._id}`)}> 
              {/* <Image
                src={character.img}
                width={500}
                height={500}
                alt="Picture of the author"
                /> */}
              {character.name}
              </button>
              
             
          

          </li>
        ))}
     
    </>
  );
}