import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Movie, MovieInfo } from "../interfaces";

const apiMovies = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export async function getPopularMovies(page: number = 1): Promise<MovieInfo[]> {
  const response = await apiMovies.get("/movie/popular?language=en-US", {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzZiNWE3MTNhMDY3NzRkNzg1MmY0OTM0NTdmNDc2OSIsInN1YiI6IjY2MDViMjRjM2ZlNzk3MDE3YmNiNWFjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A3t9GufcAJtA9mn-Zd_UELZwegAy38Zj3gFMFmUbT7w",
    },
    params: {
      page: page,
    },
  });
  return response.data.results;
}

export async function getMovieById(id: number): Promise<Movie> {
  const response = await apiMovies.get(`movie/${id}?language=en-US'`, {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzZiNWE3MTNhMDY3NzRkNzg1MmY0OTM0NTdmNDc2OSIsInN1YiI6IjY2MDViMjRjM2ZlNzk3MDE3YmNiNWFjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A3t9GufcAJtA9mn-Zd_UELZwegAy38Zj3gFMFmUbT7w",
    },
  });

  return response.data;
}

export async function getMoviesByName(
  name: string,
  page: number = 1
): Promise<MovieInfo[]> {
  const response = await apiMovies.get("/search/movie", {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzZiNWE3MTNhMDY3NzRkNzg1MmY0OTM0NTdmNDc2OSIsInN1YiI6IjY2MDViMjRjM2ZlNzk3MDE3YmNiNWFjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A3t9GufcAJtA9mn-Zd_UELZwegAy38Zj3gFMFmUbT7w",
    },
    params: {
      query: name,
      include_adult: false,
      language: "en-US",
      page: page,
    },
  });

  return response.data.results;
}

export async function postFavoriteMovie(mediaId:number) {
   await apiMovies.post('https://api.themoviedb.org/3/account/21151007/favorite', {
    media_type: 'movie',
    media_id: mediaId,
    favorite: true
}, {
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzZiNWE3MTNhMDY3NzRkNzg1MmY0OTM0NTdmNDc2OSIsInN1YiI6IjY2MDViMjRjM2ZlNzk3MDE3YmNiNWFjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A3t9GufcAJtA9mn-Zd_UELZwegAy38Zj3gFMFmUbT7w',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})
.then(response => {
    console.log('Favorite added:', response.data);
    alert("Agregado a favoritos");
})
.catch(error => {
    console.error('Error adding favorite:', error);
    return error;
});

}

export async function getFavoritesMovies(page:number=1):Promise<MovieInfo[]>{
    const response = await apiMovies.get("/account/21151007/favorite/movies", {
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNzZiNWE3MTNhMDY3NzRkNzg1MmY0OTM0NTdmNDc2OSIsInN1YiI6IjY2MDViMjRjM2ZlNzk3MDE3YmNiNWFjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.A3t9GufcAJtA9mn-Zd_UELZwegAy38Zj3gFMFmUbT7w",
        },
        params: {
          page: page,
        },
      });
      return response.data.results;
}

export const usePopularMovies = () => {
  const currentPageRef = useRef(1);
  const [popularMovies, setPopularMovies] = useState<MovieInfo[]>([]);

  useEffect(() => {
    getPopularMovies().then((movies) => setPopularMovies(movies));
  }, []);

  const nextPage = async () => {
    currentPageRef.current++;
    const movies = await getPopularMovies(currentPageRef.current);
    if (movies.length > 0) {
      setPopularMovies(movies);
    } else {
      currentPageRef.current--;
    }
  };

  const prevPage = async () => {
    if (currentPageRef.current < 1) return;

    currentPageRef.current--;
    const movies = await getPopularMovies(currentPageRef.current);
    setPopularMovies(movies);
  };

  return {
    popularMovies,

    nextPage,
    prevPage,
  };
};

export const useMovie = (id: number) => {
  const [movie, setMovie] = useState<Movie>();
  useEffect(() => {
    getMovieById(id).then((movie) => setMovie(movie));
  }, [id]);
  return {
    movie,
  };
};

export const useSearchedMovies = (name: string) => {
  const currentPageRef = useRef(1);
  const [movies, setMovies] = useState<MovieInfo[]>([]);

  useEffect(() => {
    getMoviesByName(name).then((movies) => setMovies(movies));
  }, [name]);

  const nextPage = async () => {
    currentPageRef.current++;
    const movies = await getMoviesByName(name, currentPageRef.current);
    if (movies.length > 0) {
      setMovies(movies);
    } else {
      currentPageRef.current--;
    }
  };

  const prevPage = async () => {
    if (currentPageRef.current < 1) return;

    currentPageRef.current--;
    const movies = await getMoviesByName(name, currentPageRef.current);
    setMovies(movies);
  };

  return {
    movies,

    nextPage,
    prevPage,
  };
};

export const useFavoritesMovies=()=>{
    const currentPageRef = useRef(1);
    const [favoritesMovies, setFavoritesMovies] = useState<MovieInfo[]>([]);
  
    useEffect(() => {
      getFavoritesMovies().then((movies) => setFavoritesMovies(movies));
    }, []);
  
    const nextPage = async () => {
      currentPageRef.current++;
      const movies = await getPopularMovies(currentPageRef.current);
      if (movies.length > 0) {
        setFavoritesMovies(movies);
      } else {
        currentPageRef.current--;
      }
    };
  
    const prevPage = async () => {
      if (currentPageRef.current < 1) return;
  
      currentPageRef.current--;
      const movies = await getPopularMovies(currentPageRef.current);
      setFavoritesMovies(movies);
    };
  
    return {
      favoritesMovies,
  
      nextPage,
      prevPage,
    };
};
