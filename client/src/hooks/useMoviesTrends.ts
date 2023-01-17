import { useState, useEffect } from 'react'
import { Program } from '../utils/types'
import movieServices from '../services/movies'
import { DEFAULT_TIMEOUT } from '../utils/helpers'

const useMovies = () => {
    const [isFetching, setIsFetching] = useState(false)
    const [error, setError] = useState(false)
    const [data, setData] = useState<Program[]>()

    useEffect(() => {
        (async () => {
            setIsFetching(true);
            try {
                const data = await movieServices.getTrendingMoviesForWeek();
                setTimeout(() => {
                    setData(data.results);
                }, DEFAULT_TIMEOUT)
            } catch (e: any) {
                setError(e)
            } finally {
                setIsFetching(true)
            }
        })()
    }, [])
    return { data, isFetching, error }
}

export default useMovies