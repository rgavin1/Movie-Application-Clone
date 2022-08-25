import { useState, useEffect } from 'react'
import { Program } from '../utils/types'
import televisionServices from '../services/television'

const useShows = () => {
    const [isFetching, setIsFetching] = useState(false)
    const [error, setError] = useState()
    const [data, setData] = useState<Program[]>()

    useEffect(() => {
        (async () => {
            setIsFetching(true)
            try {
                const { results } = await televisionServices.getTrending()
                setData(results)
            } catch (e: any) {
                setError(e)
            } finally {
                setIsFetching(false)

            }
        })()
    })
    return { data, isFetching, error }
}

export default useShows