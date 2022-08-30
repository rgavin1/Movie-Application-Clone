import { ShowDetailsRawResponse } from "../../utils/types";
// url https://api.themoviedb.org/3/tv/84773?api_key=57de03656a5cac8fd953412ef369fb06&language=en-US


export const mockGetShowDetailsById: ShowDetailsRawResponse = {
    adult: false,
    backdrop_path: "/pdfCr8W0wBCpdjbZXSxnKhZtosP.jpg",
    created_by: [
        {
            id: 1276959,
            credit_id: "5c0aa95c0e0a2638bc04bb53",
            name: "John D. Payne",
            gender: 2,
            profile_path: null,
        },
        {
            id: 1276960,
            credit_id: "5c0aa9469251414795047604",
            name: "Patrick McKay",
            gender: 2,
            profile_path: null,
        },
    ],
    episode_run_time: [],
    first_air_date: "2022-09-01",
    genres: [
        { id: 10765, name: "Sci-Fi & Fantasy" },
        { id: 10759, name: "Action & Adventure" },
        { id: 18, name: "Drama" },
    ],
    homepage: "https://www.amazon.com/dp/B09QHC2LZM",
    id: 84773,
    in_production: true,
    languages: ["en"],
    last_air_date: null,
    last_episode_to_air: null,
    name: "The Lord of the Rings: The Rings of Power",
    next_episode_to_air: {
        air_date: "2022-09-01",
        episode_number: 1,
        id: 1865375,
        name: "Shadow of the Past",
        overview: "",
        production_code: "",
        runtime: null,
        season_number: 1,
        show_id: 84773,
        still_path: "/qiTXK1Mpu5LzDOIjompU02KsAOn.jpg",
        vote_average: 0.0,
        vote_count: 0,
    },
    networks: [
        {
            id: 1024,
            name: "Amazon",
            logo_path: "/ifhbNuuVnlwYy5oXA5VIb2YR8AZ.png",
            origin_country: "",
        },
    ],
    number_of_episodes: 8,
    number_of_seasons: 1,
    origin_country: ["US"],
    original_language: "en",
    original_name: "The Lord of the Rings: The Rings of Power",
    overview:
        "Beginning in a time of relative peace, we follow an ensemble cast of characters as they confront the re-emergence of evil to Middle-earth. From the darkest depths of the Misty Mountains, to the majestic forests of Lindon, to the breathtaking island kingdom of Númenor, to the furthest reaches of the map, these kingdoms and characters will carve out legacies that live on long after they are gone.",
    popularity: 431.253,
    poster_path: "/suyNxglk17Cpk8rCM2kZgqKdftk.jpg",
    production_companies: [
        {
            id: 12,
            logo_path: "/iaYpEp3LQmb8AfAtmTvpqd4149c.png",
            name: "New Line Cinema",
            origin_country: "US",
        },
        {
            id: 20580,
            logo_path: "/oRR9EXVoKP9szDkVKlze5HVJS7g.png",
            name: "Amazon Studios",
            origin_country: "US",
        },
        {
            id: 137357,
            logo_path: null,
            name: "Harper Collins Publishers",
            origin_country: "US",
        },
        {
            id: 163758,
            logo_path: null,
            name: "Tolkien Enterprises",
            origin_country: "GB",
        },
    ],
    production_countries: [
        { iso_3166_1: "GB", name: "United Kingdom" },
        { iso_3166_1: "US", name: "United States of America" },
    ],
    seasons: [
        {
            air_date: "2022-09-01",
            episode_count: 8,
            id: 114041,
            name: "Season 1",
            overview: "",
            poster_path: "/K88yWEarvuce6SJIWXZM1X7GXf.jpg",
            season_number: 1,
        },
    ],
    spoken_languages: [
        { english_name: "English", iso_639_1: "en", name: "English" },
    ],
    status: "Returning Series",
    tagline: "",
    type: "Scripted",
    vote_average: 8.2,
    vote_count: 6,
};
