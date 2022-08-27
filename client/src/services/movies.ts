import { RawResponse } from '../utils/types'
import { trendingMoviesResponse } from './mocks/trendingMovies'
import { NowPlaying } from './mocks/moviesNowPlaying'
import { mockUpcomingMovies } from './mocks/mockUpcomingMovies'
import { topRated } from './mocks/mockTopRatedMovies'

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

const fetchNowPlaying = () => {
    // fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`)
    //     .then(res => res.json())
    //     .then((items) => {
    //         setNowPlaying(items.results);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })
    return NowPlaying
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