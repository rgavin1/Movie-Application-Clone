import axios from "axios";


const BASE_URL = `${process.env.REACT_APP_DEV_SERVER_PORT}/api/v1`


const features = axios.create({ baseURL: BASE_URL + '/features' });
const movies = axios.create({ baseURL: BASE_URL + '/movies' });
const persons = axios.create({ baseURL: BASE_URL + '/persons' });
const shows = axios.create({ baseURL: BASE_URL + '/tv' });

export const axiosInstances = {
    features,
    movies,
    persons,
    shows
}