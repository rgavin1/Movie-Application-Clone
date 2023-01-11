import axios from 'axios'
import express, { Request, Response } from 'express'
// import { axiosInstance } from '../../service/tmdb'

const router = express.Router()
const REACT_APP_TMDB_API_KEY = "API_KEY"


router.get('/', async (req: Request, res: Response) => {
    const { media } = req.query;
    try {
        const { data } = await axios.get(`https://api.themoviedb.org/3/trending/${media}/week?api_key=${REACT_APP_TMDB_API_KEY}`)
        res.status(200).json({ "status": "success", data })
    } catch (e) {
        res.status(404).json(e)
    }
})

module.exports = router