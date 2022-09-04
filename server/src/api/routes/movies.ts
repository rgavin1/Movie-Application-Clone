import axios from 'axios'
import express, { Request, Response } from 'express';

import { mockNowPlayingResponse, mockTrendingMoviesResponse } from '../mocks/movies'

const router = express.Router()

const REACT_APP_TMDB_API_KEY = "API_KEY"

router.get('/now-playing', async (_req: Request, res: Response) => {
    try {
        if (!mockNowPlayingResponse) {
            const { data } = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${REACT_APP_TMDB_API_KEY}&language=en-US&page=1`)
            res.json(data)
            return
        }
        res.send(mockNowPlayingResponse)
    } catch (e) {
        res.status(404).end()
    }
})

router.get('/popular', async (_req: Request, res: Response) => {
    try {
        if (!mockTrendingMoviesResponse) {
            const { data } = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${REACT_APP_TMDB_API_KEY}&language=en-US&page=1`)
            res.json(data)
            return
        }
        res.send(mockTrendingMoviesResponse)
    } catch (e) {
        res.status(404).end()
    }
})

router.get('/upcoming', async (_req: Request, res: Response) => {
    try {
        if (!mockTrendingMoviesResponse) {
            const { data } = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${REACT_APP_TMDB_API_KEY}&language=en-US&page=1`)
            res.json(data)
            return
        }
        res.send(mockTrendingMoviesResponse)
    } catch (e) {
        res.status(404).end()
    }
})

router.get('/top-rated', async (_req: Request, res: Response) => {
    try {
        if (!mockTrendingMoviesResponse) {
            const { data } = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${REACT_APP_TMDB_API_KEY}&language=en-US&page=1`)
            res.json(data)
            return
        }
        res.send(mockTrendingMoviesResponse)
    } catch (e) {
        res.status(404).end()
    }
})


module.exports = router