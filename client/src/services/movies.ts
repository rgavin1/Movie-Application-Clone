import axios from 'axios';
import { RawResponse } from '../utils/types'
import { trendingMoviesResponse } from './mocks/trendingMovies'

const BASE_URL = "http://localhost:8000/api/"

// TODO: Clean-up
const getTrendingMoviesForWeek = (): RawResponse => {
    return trendingMoviesResponse
}

const fetchPopularMovies = async (): Promise<RawResponse> => {
    const { data } = await axios.get(`${BASE_URL}/movie/popular`)
    return data
}

const fetchTopRated = async (): Promise<RawResponse> => {
    const { data } = await axios.get(`${BASE_URL}/movie/top-rated`)
    return data
}

const fetchNowPlaying = async (): Promise<RawResponse> => {
    const { data } = await axios.get(`${BASE_URL}/movie/now-playing`)
    return data
}

const fetchUpcomingMovies = async (): Promise<RawResponse> => {
    const { data } = await axios.get(`${BASE_URL}/movie/upcoming`)
    return data
}

const movieServices = {
    getTrendingMoviesForWeek,
    fetchPopularMovies,
    fetchNowPlaying,
    fetchUpcomingMovies,
    fetchTopRated
}

export default movieServices