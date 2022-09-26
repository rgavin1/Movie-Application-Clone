import axios from 'axios'
import { RawResponse } from '../utils/types';
import { MultiSearchRawResponse } from "./mocks/mockMultiSearch"

const BASE_URL = "http://localhost:3000/api/v1"
const axiosInstance = axios.create({ baseURL: BASE_URL });

// FIXME: Return correct response
const searchByQuery = async (term: string): Promise<any> => {
    const response = await axiosInstance.get("/search", { params: { term } });
    console.log('response', response)
    const output = MultiSearchRawResponse.results.filter((item: any) => item.original_title?.toLowerCase().includes(term.toLowerCase()))
    return output;
}

const searchService = {
    searchByQuery
}

export default searchService