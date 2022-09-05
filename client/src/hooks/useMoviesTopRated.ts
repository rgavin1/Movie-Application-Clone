import { useState, useEffect } from 'react'
import movieServices from '../services/movies'
import { Program } from '../utils/types'

const useMoviesTopRated = () => {
    const [data, setData] = useState<Program[]>()
    const [isFetching, setIsFetching] = useState(false)
    const [error, setError] = useState()
    useEffect(() => {
        (async () => {
            try {
                setIsFetching(true);
                const { results } = await movieServices.fetchTopRated();
                setData(results)
            } catch (e: any) {
                setError(e)
            } finally {
                setIsFetching(false);
            }
        })()
    }, [])
    return { data, isFetching, error }
}

export default useMoviesTopRated