import { MovieList } from "../components";
import { usePopularMovies } from "../api/api";

export const Home = () => {
  const { popularMovies, nextPage, prevPage } = usePopularMovies();

  return (
    <>
      <div className="flex justify-center">
        <div className="flex-col">
        <h3 className="mt-28 text-6xl font-bold text-gray-800">Home</h3>
          <MovieList moviesCardsInfo={popularMovies}></MovieList>
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
