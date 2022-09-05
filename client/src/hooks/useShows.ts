import { useState, useEffect } from 'react'
import { Program } from '../utils/types'
import televisionServices from '../services/television'

const useTrendingShows = () => {
    const [data, setData] = useState<Program[]>()
    const [error, setError] = useState()
    const [isFetching, setIsFetching] = useState(false)

    useEffect(() => {
        (async () => {
            setIsFetching(true)
            try {
                const { results } = await televisionServices.fetchTrendingShows()
                setData(results)
            } catch (e: any) {
                setError(e)
            } finally {
                setIsFetching(false)
            }
        })()
    }, [])
    return { data, isFetching, error }
}

export default useTrendingShows