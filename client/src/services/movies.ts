import { RawResponse } from '../utils/types'
import { trendingMoviesResponse } from './mocks/trendingMovies'
import { mockUpcomingMovies } from './mocks/mockUpcomingMovies'
import { topRated } from './mocks/mockTopRatedMovies'
import { mockNowPlayingRawResponse } from './mocks/moviesNowPlaying'
import axios from 'axios';

const getTrendingMoviesForWeek = (): RawResponse => {
    return trendingMoviesResponse
}

const fetchPopularMovies = () => {
    // fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
    //     .then(res => res.json())
    //     .then((items) => {
    //         const random_num = Math.floor(Math.random() * 19);
    //         setFeature(items.results[random_num]);
    //         setMovies(items.results);
    //         fetchNowPlayingMovies();
    //         fetchUpcomingMovies();
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })
}

const fetchTopRated = () => {
    // fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
    //     .then(res => res.json())
    //     .then((items) => {
    //         const random_num = Math.floor(Math.random() * 19);
    //         setFeature(items.results[random_num]);
    //         setMovies(items.results);
    //         fetchNowPlayingMovies();
    //         fetchUpcomingMovies();
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })
    return topRated
}

const fetchNowPlaying = async (): Promise<RawResponse> => {
    const { data } = await axios.get("http://localhost:8000/movie/now-playing")
    return data
}

const fetchUpcomingMovies = () => {
    // fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`)
    //     .then(res => res.json())
    //     .then((items) => {
    //         setUpcomingMovies(items.results);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })
    return mockUpcomingMovies
}

const movieServices = {
    getTrendingMoviesForWeek,
    fetchPopularMovies,
    fetchNowPlaying,
    fetchUpcomingMovies,
    fetchTopRated
}

export default movieServices