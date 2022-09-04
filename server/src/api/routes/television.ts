import axios from 'axios';
import express, { Request, Response } from 'express'
import { mockTopRatedMoviesResponse } from '../mocks/movies'

const REACT_APP_TMBD_API_KEY = "API_KEY"

const router = express.Router()

router.get('/top-rated', async (_req: Request, res: Response) => {
    if (!mockTopRatedMoviesResponse) {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${REACT_APP_TMBD_API_KEY}&language=en-US&page=1`)
            res.send(response)
        } catch (e) {
            res.status(404).send(e)
        }
    }
    res.send(mockTopRatedMoviesResponse)
})

module.exports = router