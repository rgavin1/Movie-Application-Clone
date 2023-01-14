import axios from "axios";
import { trendingAllWeekResponse } from './mocks/trendingAllWeekResponse';
import { MediaType, Program, RawResponse } from '../utils/types'; 

const BASE_URL = `${process.env.REACT_APP_DEV_SERVER_PORT}/api/v1`
const axiosInstance = axios.create({ baseURL: BASE_URL })

const getTrending = async (): Promise<Program[]> => {
    const data = trendingAllWeekResponse;
    return data.results;
}

const getFeature = async (media: Omit<MediaType, "person">): Promise<RawResponse> => {
    const { data } = await axiosInstance.get("/features", { params: { media } })
    return data.data
}

const featureService = {
    getFeature,
    getTrending,
};

export default featureService;