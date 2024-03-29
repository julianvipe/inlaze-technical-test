import { MovieInfo } from "../interfaces"
import { Link} from "react-router-dom";

interface Props{
movieCardInfo:MovieInfo;
}


export const MovieCard=({movieCardInfo}:Props)=>
{
  const{poster_path,title, vote_average,id}=movieCardInfo;

    return(
        <>
        
        <Link to={`/Detail/${id}`}>
        <div className="flex flex-col w-64 py-10">
          <img
            className="w-full rounded-t-lg"
            src={`https://image.tmdb.org/t/p/w500/${poster_path}}`}
            alt="Poster not Found"
          />
          <div className=" px-2 text-left leading-10 font-medium rounded-b-lg border-r border-l border-b bg-[#F0F6FA]">
            <p className="text-lg text-black line-clamp-1">Title:{title} </p>
            <p className="text-gray-500">votes: {vote_average}</p>
          </div>
        </div>
        </Link>
        </>
    )
}