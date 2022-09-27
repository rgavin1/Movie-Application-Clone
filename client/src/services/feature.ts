import axios from "axios";
import { trendingAllWeekResponse } from './mocks/trendingAllWeekResponse';
import { MediaType, Program, RawResponse } from '../utils/types'; 

const BASE_URL = "http://localhost:3000/api/v1"
const axiosInstance = axios.create({ baseURL: BASE_URL })

const getTrending = async (): Promise<Program[]> => {
    const data = trendingAllWeekResponse;
    return data.results;
}

const getFeature = async (media: Omit<MediaType, "person">): Promise<RawResponse> => {
    const { data } = await axiosInstance.get(`/features`, { params: { media } })
    return data
}

const featureService = {
    getFeature,
    getTrending,
};

export default featureService;