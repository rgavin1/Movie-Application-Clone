import { useState, useEffect } from 'react'
import televisionServices from '../services/television'
import { CastRawResponse } from '../utils/types'

const useCast = (id: any) => {
    const [data, setData] = useState<CastRawResponse>()
    const [isFetching, setIsFetching] = useState(false)
    const [error, setError] = useState()
    useEffect(() => {
        (async () => {
            try {
                setIsFetching(true);
                const response = await televisionServices.getCreditsById(id);
                setData(response)
            } catch (e: any) {
                setError(e)
            } finally {
                setIsFetching(false);
            }
        })()
    }, [id])
    return { data, isFetching, error }
}

export default useCast