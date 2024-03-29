import { useEffect, useState } from "react";
import { MovieInfo } from "../interfaces";
import { MovieCard } from "./MovieCard";
import { Loading } from ".";

interface Props{
   moviesCardsInfo:MovieInfo[]
}

export const MovieList=(list:Props)=>{

  const [isLoading,setLoading]=useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

    const {moviesCardsInfo}=list

    return(
        <>
         {isLoading ? (
      <Loading />
    ) : (
        <div className=" flex flex-col my-28 md:grid md:gap-x-16  md:grid-cols-4">
        {moviesCardsInfo.map((movieCardInfo)=>(<MovieCard key={movieCardInfo.id} movieCardInfo={movieCardInfo}/>))}
      </div>
      )}
        </>
    )
}