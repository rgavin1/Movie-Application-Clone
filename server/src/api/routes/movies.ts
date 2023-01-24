import axios, { AxiosError } from 'axios'
import express, { Request, Response } from 'express';
import { axiosInstance } from '../../service/tmdb';

import { mockNowPlayingResponse, mockTrendingMoviesResponse } from '../mocks/movies'

const router = express.Router()

const REACT_APP_TMDB_API_KEY = "API_KEY"

router.get('/trending', async (_req: Request, res: Response) => {
    try {
        const { data } = await axiosInstance.get(`trending/movie/week`)
        res.json(data)
    } catch (e: AxiosError | any) {
        res.status(400).json(e)
    }
})

// Get a movie by its id
router.get('/:id/info', async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params

    if (!id) res.status(400).json({ "message": "missing id" })

    try {
        const { data } = await axiosInstance.get(`movie/${id}`)
        res.json(data)
    } catch (e: AxiosError | any) {
        res.status(400).json(e)
    }
})

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