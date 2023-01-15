import { IconDefinition } from '@fortawesome/free-solid-svg-icons'

export type MediaType = "movie" | "tv" | "person";
export type Languages =
    | "en"
    | "pl"
    | "ja"
    | "es"
    | "de"
    | "ko"
    | "it"
    | "fr"
    | "hi"
    | "cn"
    | "zh"
    | "pt"
    | "tr"
    | "tl"
    | "nl"
    | "ms";
export type Country = "US" | "GB";
export type MovieGenre =
    | "Action"
    | "Adventure"
    | "Animation"
    | "Comedy"
    | "Crime"
    | "Documentary"
    | "Drama"
    | "Family"
    | "Fantasy"
    | "History"
    | "Horror"
    | "Music"
    | "Mystery"
    | "Romance"
    | "Science Fiction"
    | "TV Movie"
    | "Thriller"
    | "War"
    | "Western";

export type TelevisionGenre =
    | "Action & Adventure"
    | "Animation"
    | "Comedy"
    | "Crime"
    | "Documentary"
    | "Drama"
    | "Family"
    | "Kids"
    | "Mystery"
    | "News"
    | "Reality"
    | "Sci-Fi & Fantasy"
    | "Soap"
    | "Talk"
    | "War & Politics"
    | "Western";

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
    popularity?: number;
    poster_path: string;
    vote_average: number;
    vote_count: number;
    trailerLink?: any;
};

export type RawResponse = {
    dates?: { maximum: string; minimum: string };
    page: number;
    results: Program[];
    total_pages: number;
    total_results: number;
};

export type PersonRawResult = {
    adult: boolean;
    id: number;
    name: string;
    original_name: string;
    media_type: MediaType;
    popularity?: number;
    gender?: number;
    known_for_department: string;
    profile_path?: string | null;
    known_for: Program[];
    poster_path?: string;
    title?: string;
};

export type PersonRawResponse = {
    page: number;
    results: PersonRawResult[];
    total_pages: number;
    total_results: number;
};

export type SpokenLanguage = {
    english_name: string;
    iso_639_1: Languages;
    name: string;
};
export type Season = {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    season_number: number;
};

export type ProductionCountry = { iso_3166_1: string; name: string };

export type ProductionCompany = {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: Country;
};

export type Network = {
    id: number;
    name: string;
    logo_path: string;
    origin_country: string;
};

export type NextEpisodeToAir = {
    air_date: string;
    episode_number: number;
    id: number;
    name: string;
    overview: string;
    production_code: string;
    runtime: string | null;
    season_number: number;
    show_id: number;
    still_path: string;
    vote_average: number;
    vote_count: number;
};

export type Genre = { id: number; name: TelevisionGenre };

export type CreatedBy = {
    id: number;
    credit_id: string;
    name: string;
    gender: number;
    profile_path: string | null;
};

export type ShowDetailsRawResponse = {
    adult: boolean;
    backdrop_path: string;
    created_by: CreatedBy[];
    episode_run_time: [];
    first_air_date: string;
    genres: Genre[];
    homepage: string;
    id: number;
    in_production: boolean;
    languages: Languages[];
    last_air_date: string | null;
    last_episode_to_air: string | null;
    name: string;
    next_episode_to_air: NextEpisodeToAir;
    networks: Network[];
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country: Country[];
    original_language: Languages;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    seasons: Season[];
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    type: string;
    vote_average: number;
    vote_count: number;
    release_date?: string;
    title?: string;
    media_type?: string;
    genre_ids?: number[];
    mediaType?: any;
};

export type Department = "Acting" | "Directing" | "Production" | "Writing" | "Art" | "Visual Effects" | "Costume \u0026 Make-Up" | "Sound"

export type Cast = {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: Department;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string | null;
    character: string;
    credit_id: string;
    order: number;
}

export type Job = "Visual Effects Supervisor" | "Executive Producer" | "Original Music Composer" | "Main Title Theme Composer" | "Novel" | "Visual Effects Producer" | "Co-Producer" | "Costume Design" | "Producer" | "Production Design" | "Co-Executive Producer" | "Concept Artist"
export type Crew = Omit<Cast, "character" | "order"> & { department: Department; job: Job }

export type CastRawResponse = { id: number; cast: Cast[]; crew: Crew[] }

export type LastEpisodeToAir = {
    air_date: string;
    episode_number: number;
    id: number;
    name: string;
    overview: string;
    production_code: number;
    season_number: number;
    still_path: string;
    vote_average: string;
    vote_count: number;
}

export type Seasons = {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    season_number: number;
}

// FIXME: Get correct origin country
export type ProductionCompanies = {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}

export type ProductionCountries = {
    iso_3166_1: string;
    name: string;
}

// FIXME: Get correct english name
export type SpokenLanguages = {
    english_name: string;
    iso_639_1: string;
    name: string;
}

export type TelevisionShowDetails = {
    adult?: boolean;
    backdrop_path: string;
    created_by: CreatedBy[];
    episode_run_time: number[];
    first_air_date: string;
    genres: Genre[];
    homepage: string;
    id: number;
    in_production: boolean;
    languages: string[];
    last_air_date: string | null;
    last_episode_to_air: LastEpisodeToAir | null;
    name: string;
    next_episode_to_air: null,
    networks: Network[];
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: ProductionCompanies[];
    production_countries: ProductionCountries[];
    seasons: Seasons[];
    spoken_languages: SpokenLanguages[];
    status: string;
    tagline: string;
    type: string;
    vote_average: number;
    vote_count: number;
}

export type Route = {
    name: string;
    path: string;
    icon: IconDefinition
}

export type Credentials = { username: string; password: string }