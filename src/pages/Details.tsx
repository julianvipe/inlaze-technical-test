import { useParams } from "react-router-dom";
import { postFavoriteMovie, useMovie } from "../api/api";
import { useEffect, useState } from "react";
import { Loading } from "../components";

export const Details = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

 function addFavorites(id:number){
    postFavoriteMovie(id);
  }

  const { id } = useParams();
  const { movie } = useMovie(id ? +id : 0);
  
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className=" md:flex md:justify-center md:ml-96">
          <div className="my-32 flex flex-col md:flex  md:flex-row">
            <img
              className="w-64 m-auto rounded-lg md:w-96 md:m-0 "
              src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
            ></img>
            <div className="text-center my-16 px-2 md:text-left md:px-32 text-xl">
              <p>
                <span className="font-semibold text-gray-700 ">Title: </span>
                {movie?.title}
              </p>
              <p>
                <span className="font-semibold text-gray-700  ">
                  Synopsis:{" "}
                </span>
                {movie?.overview}
              </p>
              <p>
                <span className="font-semibold text-gray-700  ">
                  Release date:{" "}
                </span>
                {movie?.release_date.toString()}
              </p>
              <p className=" md:flex text-center">
                {" "}
                <span className="font-semibold text-gray-700  ">
                  Genres:
                </span>{" "}
                {movie?.genres.map((gener) => {
                  return `${gener.name}, `;
                })}
              </p>
              <p>
                <span className="font-semibold text-gray-700  ">Score: </span>
                {movie?.vote_average}
              </p>
              <button className=" mt-20 text-xl text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 "
              onClick={()=>addFavorites(movie?.id?movie.id:0)}
              >
                Agregar a favoritos
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
