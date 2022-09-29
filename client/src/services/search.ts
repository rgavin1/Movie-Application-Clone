import axios from 'axios'
import { RawResponse } from '../utils/types';

const BASE_URL = `${process.env.REACT_APP_DEV_SERVER_PORT}/api/v1`
const axiosInstance = axios.create({ baseURL: BASE_URL });

// FIXME: Return correct response
const searchByQuery = async (term: string): Promise<any> => {
    const { data } = await axiosInstance.get("/search", { params: { term } });
    const output = data.data.filter((item: any) => item.original_title?.toLowerCase().includes(term.toLowerCase()))
    return output;
}

const searchService = {
    searchByQuery
}

export default searchService