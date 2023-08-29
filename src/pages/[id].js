import useSWR from "swr";
import { useRouter } from "next/router";


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
  console.log("Here is my data on [ID]",data);




  return (
    <>
              <h2>This is the detail Page</h2>
              {data.name}
              {data.attack}
              {data.comparison}
              {data.description}
              {data.leavingbehindtrail}
              {data.weaknesses}
              {data.zodiac} 

    </>
  );
}