import { mockNowPlayingRawResponse } from "./mocks/moviesNowPlaying"
import { trendingAllWeekResponse } from "./mocks/trendingAllWeekResponse"

const axios = require('axios')
const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

const PORT = 8000
const REACT_APP_TMDB_API_KEY = ""

// FIXME: Remove the mock data once it's ready to go live.
app.get('/features/:media', async (req: any, res: any) => {
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

app.get('/movie/now-playing', async (_req: any, res: any) => {
    try {
        if (!mockNowPlayingRawResponse) {
            const { data } = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${REACT_APP_TMDB_API_KEY}&language=en-US&page=1`)
            res.json(data)
            return
        }
        res.send(mockNowPlayingRawResponse)
    } catch (e) {
        res.status(404).end()
    }
})

app.get('/movie/popular')
app.get('/movie/upcoming')
app.get('/movie/top-rated')

// app.get('/tv/')
// app.get('/search/')

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})