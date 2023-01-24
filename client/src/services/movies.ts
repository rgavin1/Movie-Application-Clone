import axios from 'axios';

import { RawResponse } from '../utils/types'

const BASE_URL = `${process.env.REACT_APP_DEV_SERVER_PORT}/api/v1/movies`
const axiosInstance = axios.create({ baseURL: BASE_URL });

const getTrendingMoviesForWeek = async (): Promise<RawResponse> => {
    const { data } = await axiosInstance.get('/trending')
    return data
}

const getMovieById = async (id: any): Promise<RawResponse> => {
    const { data } = await axiosInstance.get(`/${id}/info`)
    return data
}

const fetchPopularMovies = async (): Promise<RawResponse> => {
    const { data } = await axiosInstance.get("/popular")
    return data
}

const fetchTopRated = async (): Promise<RawResponse> => {
    const { data } = await axiosInstance.get("/top-rated")
    return data
}

const fetchNowPlaying = async (): Promise<RawResponse> => {
    const { data } = await axiosInstance.get("/now-playing")
    return data
}

const fetchUpcomingMovies = async (): Promise<RawResponse> => {
    const { data } = await axiosInstance.get("/upcoming")
    return data
}

const movieServices = {
    getTrendingMoviesForWeek,
    getMovieById,
    fetchPopularMovies,
    fetchNowPlaying,
    fetchUpcomingMovies,
    fetchTopRated
}

export default movieServices