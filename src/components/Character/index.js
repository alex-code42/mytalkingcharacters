import useSWR from "swr";
import { useRouter } from "next/router";


export default function Character() {
    const router = useRouter();
    const { id } = router.query;
  
    const { character  } = useSWR(id ? `/api/character/${id}` : null);
  
    if (!character) {
      return <h1>Loading...</h1>;
    }
  return (
    <>
      
      
        {data.map((character) => (
          <li key={character._id}>
            {/* <StyledButtonBUtton type="button" onClick={() => router.push(`/${character._id}`)}> */}
              {character.name}
              {character.attack}
              {character.comparison}
              {character.description}
              {character.leavingbehindtrail}
              {character.weaknesses}
              {character.zodiac} 

              {/* </StyledButtonBUtton> */}

          </li>
        ))}
     
    </>
  );
}