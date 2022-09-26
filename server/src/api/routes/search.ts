import axios from 'axios'
import express, { Request, Response } from 'express'
import { mockMultiSearchResponse } from '../mocks/search'

const router = express.Router()

router.get('/', async (req: Request, res: Response) => {
    const { term } = req.query

    if (!term) return res.status(400).send({ message: "invalid request" });

    /**
     * TODO: Set-up DynamoDB
     * 
     * Check my database for the information before checking IMDB.
     * This should provide caching and reduce the number of request the 
     * IMDB API server.
     * 
     */
    try {
        const searchedItems = mockMultiSearchResponse.results.filter(item => item.name?.includes(term as string) || item.title?.includes(term as string))
        res.status(200).send({ data: searchedItems, total_results: searchedItems.length })
    } catch (e) {
        res.status(404).send(e)
    }
})

module.exports = router