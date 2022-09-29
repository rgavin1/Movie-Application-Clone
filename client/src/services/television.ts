import axios from 'axios'
import { RawResponse, CastRawResponse, ShowDetailsRawResponse } from '../utils/types'

const BASE_URL = `${process.env.REACT_APP_DEV_SERVER_PORT}/api/v1/tv`;
const axiosInstance = axios.create({ baseURL: BASE_URL });

const fetchTrendingShows = async (): Promise<RawResponse> => {
    const { data } = await axiosInstance.get("/trending")
    return data
}

const fetchPopularTelevisionShows = async (): Promise<RawResponse> => {
    const { data } = await axiosInstance.get("/popular")
    return data
}

const fetchTopRatedShows = async (): Promise<RawResponse> => {
    const { data } = await axiosInstance.get("/top-rated")
    return data
}

const fetchAiringToday = async (): Promise<RawResponse> => {
    const { data } = await axiosInstance.get("/airing-today")
    return data
}

const fetchOnAir = async (): Promise<RawResponse> => {
    const { data } = await axiosInstance.get("/on-air")
    return data
}

const fetchSimilarShows = async ({ id = 88396 }): Promise<RawResponse> => {
    const { data } = await axiosInstance.get(`/similar/${id}`)
    return data
}

const fetchRecommendedShows = async ({ id = 88396 }): Promise<RawResponse> => {
    const { data } = await axiosInstance.get(`/recommendations/${id}`)
    return data
}

const getShowDetailsById = async (id?: string): Promise<ShowDetailsRawResponse> => {
    const { data } = await axiosInstance.get(`/details/${id}`)
    return data
}

const getCreditsById = async (id?: string): Promise<CastRawResponse> => {
    const { data } = await axiosInstance.get(`/credits/${id}`)
    return data
}

const televisionServices = {
    fetchTrendingShows,
    fetchPopularTelevisionShows,
    fetchSimilarShows,
    fetchRecommendedShows,
    fetchAiringToday,
    fetchTopRatedShows,
    fetchOnAir,
    getShowDetailsById,
    getCreditsById
}

export default televisionServices