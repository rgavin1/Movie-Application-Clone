import { useState, useEffect } from 'react'
import televisionServices from '../services/television'
import { CastRawResponse } from '../utils/types'

const useCast = () => {
    const [data, setData] = useState<CastRawResponse>()
    const [isFetching, setIsFetching] = useState(false)
    const [error, setError] = useState()
    useEffect(() => {
        (async () => {
            try {
                setIsFetching(true);
                const results = await televisionServices.getCastById();
                setData(results)
            } catch (e: any) {
                setError(e)
            } finally {
                setIsFetching(false);
            }
        })()
    })
    return { data, isFetching, error }
}

export default useCast