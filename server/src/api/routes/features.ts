import { AxiosError } from 'axios';
import express, { Request, Response } from 'express'
import { axiosInstance } from '../../service/tmdb'

const router = express.Router()
router.get('/', async (req: Request, res: Response) => {
    const url = `trending/${req.query.media}/weeka`

    try {
        const { data } = await axiosInstance.get(url)
        res.json({ "status": "success", data })
    } catch (error: AxiosError | any) {
        if (error.message) {
            res.json({ "status": 400, "message": error.message })
        } else {
            res.json({ "message": error.message })
        }
    }
})

module.exports = router