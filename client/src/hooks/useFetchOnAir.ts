import { useState, useEffect } from 'react'
import televisionServices from '../services/television'
import { Program } from '../utils/types'

const useFetchOnAir = () => {
    const [data, setData] = useState<Program[]>()
    const [isFetching, setIsFetching] = useState(false)
    const [error, setError] = useState()

    useEffect(() => {
        (async () => {
            try {
                setIsFetching(true)
                const { results } = await televisionServices.fetchOnAir();
                setData(results);
            } catch (e: any) {
                setError(e);
            } finally {
                setIsFetching(false);
            }
        })()
    })
    return { data, isFetching, error }
}

export default useFetchOnAir