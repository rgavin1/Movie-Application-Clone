import { MultiSearchRawResponse } from "./mocks/mockMultiSearch"

const searchByQuery = (query: string) => {
    const output = MultiSearchRawResponse.results.filter((item: any) => item.original_title?.toLowerCase().includes(query.toLowerCase()))
    return output;
}

const searchService = {
    searchByQuery
}

export default searchService