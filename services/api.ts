export const TMDB_CONFIG = {
  API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  BASE_URL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
  },
  //   IMAGE_BASE_URL: "https://image.tmdb.org/t/p",
  //   BACKDROP_SIZE: "original",
  //   POSTER_SIZE: "w500",
};

export const fetchMovies = async ({ query }: { query: string }) => {
  console.log("Fetching movies with query:", query);
  const endpoint = query
    ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

  console.log("Endpoint:", endpoint);

  const response = await fetch(endpoint, {
    method: "GET",
    headers: TMDB_CONFIG.headers,
  });
  if (!response.ok) {
    throw new Error(`Error fetching movies: ${response.statusText}`);
  }
  const data = await response.json();
  return data.results;
};

export const fetchMovieDetails = async (
  movieId: string
): Promise<MovieDetails> => {
  console.log("Fetching movie details for ID:", movieId);
  const endpoint = `${TMDB_CONFIG.BASE_URL}/movie/${movieId}?api_key=${TMDB_CONFIG.API_KEY}&language=en-US`;
  console.log("Endpoint:", endpoint);
  const response = await fetch(endpoint, {
    method: "GET",
    headers: TMDB_CONFIG.headers,
  });
  if (!response.ok) {
    throw new Error(`Error fetching movie details: ${response.statusText}`);
  }
  const data = await response.json();
  return data;
};

// const url =
//   "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDI0MTI3MDZmOGE5MTk0MGQwZGExOGY5ZTc0MmY2NyIsIm5iZiI6MTc1MDEwMDM1Ni43ODIsInN1YiI6IjY4NTA2OTg0NDJmYjZjOTRmZTE1MGI3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RGgMjzv6m4XbVd-xnJpgjpzIJL8MDrHUozUAKexsNQo",
//   },
// };

// fetch(url, options)
//   .then((res) => res.json())
//   .then((json) => console.log(json))
//   .catch((err) => console.error(err));
