import { MovieGenre, TelevisionGenre } from "./types";

export const DEFAULT_TIMEOUT = 1100

export const IMAGE_SIZE_WIDTH_500_LOGO = "https://image.tmdb.org/t/p/w500";
export const IMAGE_SIZE_WIDTH_500 = "https://image.tmdb.org/t/p/w500/";
export const IMAGE_SIZE_HEIGHT_632 = "https://image.tmdb.org/t/p/h632/";
export const IMAGE_SIZE_ORIGINAL = "https://image.tmdb.org/t/p/original/";
export const POSTER_SIZE_W92 = "https://image.tmdb.org/t/p/w342/";

// "poster_sizes": [
//   "w92",
//   "w154",
//   "w185",
//   "w342",
//   "w500",
//   "w780",
//   "original"
// ]

export const MovieIdGenre: { [key: number]: MovieGenre } = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Science Fiction",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western",
};

export const TelevisionIdGenre: { [key: number]: TelevisionGenre } = {
  10759: "Action & Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  10762: "Kids",
  9648: "Mystery",
  10763: "News",
  10764: "Reality",
  10765: "Sci-Fi & Fantasy",
  10766: "Soap",
  10767: "Talk",
  10768: "War & Politics",
  37: "Western",
};

export const FeatureGenre = { ...MovieIdGenre, ...TelevisionIdGenre }