import { AxiosError } from "axios";
import express, { Request, Response } from "express";
import { axiosInstance } from "../../service/tmdb";

const router = express.Router()

router.get("/trending", async (_req: Request, res: Response) => {
    try {
        const { data } = await axiosInstance.get(`trending/person/week`)
        res.json(data)
    } catch (error: AxiosError | any) {
        res.status(400).json(error)
    }
})

module.exports = router