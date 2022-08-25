import { RawResponse } from '../utils/types'
import { trendingShows } from './mocks/trendingShows'

const getTrending = (): RawResponse => {
    return trendingShows
}

const televisionServices = {
    getTrending
}

export default televisionServices