import { feature as featType } from '../utils/types'; 

;
const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const GET_TRENDING_ALL_BY_WEEK = `https://api.themoviedb.org/3/trending/all/week?api_key=${TMDB_API_KEY}`;

const getTrending = async (): Promise<featType[]> => {
    const response = await fetch(GET_TRENDING_ALL_BY_WEEK);
    const data = await response.json();
    return data.results;
}

const getFeature = async (): Promise<featType> => {
    const list = await getTrending();
    return list[Math.floor(Math.random() * list.length)];
}

const feature = {
    getFeature,
    getTrending,
};

export default feature;