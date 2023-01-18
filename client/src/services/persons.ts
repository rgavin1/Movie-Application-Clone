import { axiosInstances } from "../constants"


const getTrendingPerformers = async (): Promise<any> => {
    const { data } = await axiosInstances.persons.get("/trending")
    return data
}

const PersonsServices = {
    getTrendingPerformers
}

export default PersonsServices;