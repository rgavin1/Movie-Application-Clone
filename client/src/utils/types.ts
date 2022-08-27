export type MediaType = "movie" | "tv" | "person";
export type Languages = "en" | "pl" | "ja" | "es" | "de" | "ko" | "it" | "fr" | "hi" | "cn" | "zh" | "pt" | "tr" | "tl" | "nl" | "ms"
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

export type Program = {
    adult?: boolean;
    original_title?: string;
    media_type?: MediaType | undefined;
    release_date?: string;
    title?: string;
    video?: boolean;
    first_air_date?: string;
    name?: string;
    original_name?: string;
    origin_country?: string[];
    profile_path?: string | null;
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    original_language: Languages;
    overview: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    vote_count: number;
}

export type RawResponse = {
    dates?: { maximum: string; minimum: string; };
    page: number;
    results: Program[];
    total_pages: number;
    total_results: number;
}

export type PersonRawResult = {
    adult: boolean;
    id: number;
    name: string;
    original_name: string;
    media_type: MediaType;
    popularity: number;
    gender: number;
    known_for_department: string;
    profile_path?: string | null;
    known_for: Program[];
    poster_path?: string;
    title?: string;
}

export type PersonRawResponse = {
    page: number;
    results: PersonRawResult[];
    total_pages: number;
    total_results: number;
}