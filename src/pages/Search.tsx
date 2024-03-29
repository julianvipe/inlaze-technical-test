import { useParams } from "react-router-dom";
import { useSearchedMovies } from "../api/api";
import { MovieList } from "../components";

export const Search = () => {
  const { name } = useParams();
  const { movies, nextPage, prevPage } = useSearchedMovies(name ? name : "");

  return (
    <>
      <div className="flex justify-center">
        <div className="flex-col">
        <h3 className="mt-28 text-6xl font-bold text-gray-800">Search</h3>
          <MovieList moviesCardsInfo={movies}></MovieList>
          <div className="flex flex-row flex-wrap justify-center">
            <button className="my-2 py-2 px-5 bg-white rounded-lg border me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100" onClick={prevPage}>
              Prev
            </button>
            <button className="my-2 py-2 px-5 bg-white rounded-lg border me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100" onClick={nextPage}>
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
