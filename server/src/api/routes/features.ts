import express, { Request, Response, Router } from 'express'
import { featureHandlers } from '../handlers/features';

const router: Router = express.Router()
router.get('/', async (req: Request, res: Response): Promise<void> => {
    const { media } = req.query
    const selectedFeature = await featureHandlers.selectAFeatureByMedia(media)

    if (!selectedFeature) res.status(400).json({ "message": "Missing feature" })

    const featureTrailer = await featureHandlers.fetchTrailerById(media, selectedFeature)
    res.json({ ...selectedFeature, trailerLink: featureTrailer })
})

module.exports = router