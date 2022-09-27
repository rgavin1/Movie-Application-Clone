import axios from 'axios'
import express, { Request, Response } from 'express'
import { trendingAllWeekResponse } from '../mocks/feature/trendingAllWeekResponse'

const router = express.Router()
const REACT_APP_TMDB_API_KEY = "API_KEY"


router.get('/', async (req: Request, res: Response) => {
    const { media } = req.query;
    try {
        if (!trendingAllWeekResponse) {
            const { data } = await axios.get(`https://api.themoviedb.org/3/trending/${req.params.media}/week?api_key=${REACT_APP_TMDB_API_KEY}`)
            res.json(data)
            return
        }
        res.send(trendingAllWeekResponse)
    } catch (e) {
        res.status(404).end()
    }
})

module.exports = router