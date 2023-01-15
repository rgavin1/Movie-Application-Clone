import axios from "axios";
import { trendingAllWeekResponse } from './mocks/trendingAllWeekResponse';
import { MediaType, Program, RawResponse } from '../utils/types'; 

const BASE_URL = `${process.env.REACT_APP_DEV_SERVER_PORT}/api/v1`
const axiosInstance = axios.create({ baseURL: BASE_URL })

const getTrending = async (): Promise<Program[]> => {
    const data = trendingAllWeekResponse;
    return data.results;
}

const getFeatureByMedia = async (media: Omit<MediaType, "person">): Promise<Program> => {
    const { data } = await axiosInstance.get("/features", { params: { media } })
    return data
}

const getFeatureListByMedia = async (media: Omit<MediaType, "person">): Promise<RawResponse> => {
    const { data } = await axiosInstance.get("/features", { params: { media } })
    return data.data
}

const featureService = {
    getFeatureByMedia,
    getFeatureListByMedia,
    getTrending,
};

export default featureService;