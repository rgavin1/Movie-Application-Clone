import { RawResponse } from '../utils/types'
import { GetPopular } from './mocks/mockGetPopularTvShows'
import { trendingShows } from './mocks/trendingShows'
import { AiringToday } from './mocks/mockShowsAiringToday'
import { OnAir } from './mocks/mockGetOnAir'
import { mockGetShowDetailsById } from './mocks/mockGetShowById'
import { mockCast } from './mocks/mockGetCast'

const fetchTrendingShows = (): RawResponse => {
    return trendingShows
}

const fetchPopularTelevisionShows = (): RawResponse => {
    // fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
    //     .then(res => res.json())
    //     .then((items) => {
    //         const random_num = Math.floor(Math.random() * 19);
    //         if (items.results[random_num].backdrop_path !== "undefined") {
    //             setFeature(items.results[0]);
    //             setShows(items.results);
    //             fetchRelatedShows(items.results[0].id);
    //             fetchRecommendedShows(items.results[0].id);
    //             fetchTopRatedShows();
    //         }
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })
    return GetPopular
}

const fetchAiringToday = () => {
    // fetch(`https://api.themoviedb.org/3/tv/${tv_id}/similar?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`)
    //     .then(res => res.json())
    //     .then((items) => {
    //         setRelatedshows(items.results);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })
    return AiringToday;
}

const fetchOnAir = () => {
    // fetch(`https://api.themoviedb.org/3/tv/${tv_id}/similar?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`)
    //     .then(res => res.json())
    //     .then((items) => {
    //         setRelatedshows(items.results);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })
    return OnAir;
}

const fetchRelatedShows = ({ tv_id = 88396 }) => {
    // fetch(`https://api.themoviedb.org/3/tv/${tv_id}/similar?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`)
    //     .then(res => res.json())
    //     .then((items) => {
    //         setRelatedshows(items.results);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })
}

const fetchRecommendedShows = ({ tv_id = 88396 }) => {
    // fetch(`https://api.themoviedb.org/3/tv/${tv_id}/recommendations?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`)
    //     .then(res => res.json())
    //     .then((items) => {
    //         setRecommendedshows(items.results);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })
}

const fetchTopRatedShows = () => {
    // fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`)
    //     .then(res => res.json())
    //     .then((items) => {
    //         setTopRatedShows(items.results);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })
}

const getShowDetailsById = (id?: string) => {
    return mockGetShowDetailsById;
}

const getCastById = () => {
    return mockCast
}

const televisionServices = {
    fetchTrendingShows,
    fetchPopularTelevisionShows,
    fetchRelatedShows,
    fetchRecommendedShows,
    fetchAiringToday,
    fetchTopRatedShows,
    fetchOnAir,
    getShowDetailsById,
    getCastById
}

export default televisionServices