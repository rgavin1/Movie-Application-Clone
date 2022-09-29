import { useEffect, useState } from 'react'
import televisionServices from '../services/television'
import { ShowDetailsRawResponse } from '../utils/types'

const useShowDetails = (id?: string) => {
    const [data, setData] = useState<ShowDetailsRawResponse>()
    const [isFetching, setIsFetching] = useState(false)
    const [error, setError] = useState()

    useEffect(() => {
        (async () => {
            setIsFetching(true);
            try {
                const response = await televisionServices.getShowDetailsById(id);
                setData(response as ShowDetailsRawResponse)
            } catch (e: any) {
                setError(e)
            } finally {
                setIsFetching(false);
            }
        })()
    }, [id]);

    return { data, isFetching, error }
}

export default useShowDetails