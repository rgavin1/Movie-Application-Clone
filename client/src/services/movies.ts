import { RawResponse } from '../utils/types'
import { trendingMoviesResponse } from './mocks/trendingMovies'

const getTrendingMoviesForWeek = (): RawResponse => {
    return trendingMoviesResponse
}

const movieServices = {
    getTrendingMoviesForWeek
}

export default movieServices