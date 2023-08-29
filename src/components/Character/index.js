import useSWR from "swr";
import { useRouter } from "next/router";


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
              {character.name}
              {/* {character.attack}
              {character.comparison}
              {character.description}
              {character.leavingbehindtrail}
              {character.weaknesses}
              {character.zodiac} */}

              {/* </StyledButtonBUtton> */}

          </li>
        ))}
     
    </>
  );
}