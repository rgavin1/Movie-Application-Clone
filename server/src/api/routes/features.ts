import { AxiosError } from 'axios';
import express, { Request, Response, Router } from 'express'
import { YOUTUBE_VIDEO_BASE_URL } from '../../contants';
import { axiosInstance } from '../../service/tmdb'

const router: Router = express.Router()
router.get('/', async (req: Request, res: Response): Promise<void> => {
    let selectedFeature;
    const { media } = req.query

    // TODO: Create a function to handle weekly features
    const url = `trending/${media}/week`
    try {
        const { data } = await axiosInstance.get(url)
        const featureList = data.results

        const randomizeFeatureList = (list: any[]) => {
            const randomNumber = Math.floor(Math.random() * list.length)
            return list[randomNumber]
        }

        selectedFeature = randomizeFeatureList(featureList)
    } catch (error: AxiosError | any) {
        if (error.message) res.json({ "status": 400, "message": error.message })
        else {
            res.json({ "message": error.message })
        }
    }

    // TODO: Create a function to handle trailers
    const trailerUrl = `/${media}/${selectedFeature.id}/videos`
    try {
        const { data } = await axiosInstance.get(trailerUrl)
        if (data.results) {
            const trailerInfo = data.results.find((item: any) => item.site === "YouTube" && item.type === "Trailer")

            const trailerUrl = `${YOUTUBE_VIDEO_BASE_URL}${trailerInfo.key}?autoplay=1`
            res.json({ ...selectedFeature, hasTrailer: true, trailerUrl })
        } else {
            res.json({ ...selectedFeature, hasTrailer: false, trailerUrl: null })
        }
    } catch (error: AxiosError | any) {
        if (error.message) res.json({ "status": 400, "message": error.message })
        else {
            res.json({ "message": error.message })
        }
    }
})

module.exports = router