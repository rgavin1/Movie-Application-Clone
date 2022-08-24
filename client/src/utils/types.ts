export type MediaType = "movie" | "tv";
export type Languages = "en" | "pl"
export type Country = "US"
export type MovieGenre = "Action" | "Adventure" | "Animation" | "Comedy" | "Crime" | "Documentary" | "Drama" | "Family" | "Fantasy" | "History" | "Horror" | "Music" | "Mystery" | "Romance" | "Science Fiction" | "TV Movie" | "Thriller" | "War" | "Western"

export type TelevisionGenre = "Action & Adventure" |
    "Animation" |
    "Comedy" |
    "Crime" |
    "Documentary" |
    "Drama" |
    "Family" |
    "Kids" |
    "Mystery" |
    "News" |
    "Reality" |
    "Sci-Fi & Fantasy" |
    "Soap" |
    "Talk" |
    "War & Politics" |
    "Western"

export type Payload = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    media_type: MediaType;
    original_language: Languages;
    original_title?: string;
    overview: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    vote_count: number;
    release_date?: string;
    title?: string;
    video?: boolean;
    first_air_date?: string;
    name?: string;
    original_name?: string;
    origin_country?: string[];
}

export type RawResponse = {
    page: number;
    results: Payload[];
    total_pages: number;
    total_results: number;
}