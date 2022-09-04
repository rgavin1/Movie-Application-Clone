import axios from 'axios'
import express, { Request, Response } from 'express'

const router = express.Router()

router.get('/', async (req: Request, res: Response) => {
    try {
        const response = await axios.get("")
        res.send(response)
    } catch (e) {
        res.status(404).send(e)
    }
})

module.exports = router