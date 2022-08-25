import { trendingPersonsResponse } from "./mocks/trendingPersons"

const getTrendingPersons = () => {
    return trendingPersonsResponse
}

const PersonsServices = {
    getTrendingPersons
}

export default PersonsServices;