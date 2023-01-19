import axios, { AxiosError } from 'axios';
import express, { Request, Response } from 'express'
import { axiosInstance } from '../../service/tmdb';
import { mockOnAirResponse, mockAiringTodayResponse, mockTrendingShowsResponse, mockPopularTelevisionResponse } from '../mocks/tv'

const REACT_APP_TMBD_API_KEY = "API_KEY"
const router = express.Router()

router.get('/top-rated', async (_req: Request, res: Response) => {
    if (!mockTrendingShowsResponse) {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${REACT_APP_TMBD_API_KEY}&language=en-US&page=1`)
            res.send(response)
        } catch (e) {
            res.status(404).send(e)
        }
    }
    res.send(mockTrendingShowsResponse)
})

router.get('/trending', async (_req: Request, res: Response): Promise<void> => {
    try {
        const { data } = await axiosInstance.get(`trending/tv/week`)
        res.json(data)
        } catch (e) {
        res.status(400).json(e)
    }
})

router.get('/popular', async (_req: Request, res: Response) => {
    if (!mockPopularTelevisionResponse) {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`)
            res.send(response)
        } catch (e) {
            res.status(404).send(e)
        }
    }
    res.send(mockPopularTelevisionResponse)
})

router.get('/airing-today', async (_req: Request, res: Response) => {
    if (!mockAiringTodayResponse) {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`)
            res.send(response)
        } catch (e) {
            res.status(404).send(e)
        }
    }
    res.send(mockAiringTodayResponse)
})

router.get('/on-air', async (_req: Request, res: Response) => {
    if (!mockOnAirResponse) {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`)
            res.send(response)
        } catch (e) {
            res.status(404).send(e)
        }
    }
    res.send(mockOnAirResponse)
})

router.get('/similar/:id', async (req: Request, res: Response) => {
    if (!mockOnAirResponse) {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/tv/${req.params.id}/similar?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`)
            res.send(response)
        } catch (e) {
            res.status(404).send(e)
        }
    }
    res.send(mockOnAirResponse)
})

router.get('/recommendations/:id', async (req: Request, res: Response) => {
    if (!mockOnAirResponse) {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/tv/${req.params.id}/recommendations?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`)
            res.send(response)
        } catch (e) {
            res.status(404).send(e)
        }
    }
    res.send(mockOnAirResponse)
})

router.get('/details/:id', async (req: Request, res: Response) => {
    try {
        const { data } = await axiosInstance.get(`tv/${req.params.id}`)
        res.json(data)
    } catch (e: AxiosError | any) {
        res.status(404).send(e)
    }
})

router.get('/:id/credits', async (req: Request, res: Response) => {
    try {
        const { data } = await axiosInstance.get(`tv/${req.params.id}/credits`)
        res.json(data)
    } catch (e) {
        res.status(404).send(e)
    }
})

module.exports = router