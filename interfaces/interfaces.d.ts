interface Movie {
  id: number;
  title: string;
  adult: boolean; // true for adult content, false for general audience
  backdrop_path: string; // URL to the backdrop image
  genre_ids: number[]; // Array of genre IDs
  original_language: string; // Language code (e.g., 'en' for English)
  original_title: string; // Original title of the movie
  overview: string; // Brief description of the movie
  popularity: number; // Popularity score
  poster_path: string; // URL to the poster image
  vote_average: number; // Average rating (out of 10)
  vote_count: number; // Total number of votes
  video: boolean; // true if the movie has a video, false otherwise
  release_date: string;
}

interface TrendingMovie {
  searchTerm: string; // The search term used to find the movie
  movie_id: number; // Unique identifier for the movie
  title: string; // Title of the movie
  count: number; // Number of times the movie was found in the search
  poster_url: string; // URL to the poster image
}

interface MovieDetails {
  id: number; // Unique identifier for the movie
  title: string; // Title of the movie
  adult: boolean; // true for adult content, false for general audience
  backdrop_path: string; // URL to the backdrop image
  genres: { id: number; name: string }[]; // Array of genre objects
  original_language: string; // Language code (e.g., 'en' for English)
  original_title: string; // Original title of the movie
  overview: string; // Brief description of the movie
  popularity: number; // Popularity score
  poster_path: string; // URL to the poster image
  release_date: string; // Release date of the movie
  runtime: number; // Runtime in minutes
  status: string; // Release status (e.g., 'Released', 'Post Production')
  tagline: string; // Tagline of the movie
  vote_average: number; // Average rating (out of 10)
  vote_count: number; // Total number of votes
  belongs_to_collection: {
    id: number; // Unique identifier for the collection
    name: string; // Name of the collection
    poster_path: string; // URL to the collection's poster image
    backdrop_path: string; // URL to the collection's backdrop image
  } | null; // Collection details or null if not part of a collection
}
