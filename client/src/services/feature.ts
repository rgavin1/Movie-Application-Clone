import { trendingAllWeekResponse } from './mocks/trendingAllWeekResponse';
import { Program } from '../utils/types'; 

const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;

// const GET_TRENDING_ALL_BY_WEEK = `https://api.themoviedb.org/3/trending/all/week?api_key=${TMDB_API_KEY}`;

const getTrending = async (): Promise<Program[]> => {
    // const response = await fetch(GET_TRENDING_ALL_BY_WEEK);
    // const data = await response.json();
    const data = trendingAllWeekResponse;
    return data.results;
}

const getFeature = async (): Promise<Program> => {
    const list = await getTrending();
    return list[Math.floor(Math.random() * list.length)];
}

const featureService = {
    getFeature,
    getTrending,
};

export default featureService;