import { useState, useEffect } from 'react'
import { Program } from '../utils/types'
import movieServices from '../services/movies'

const useMovies = () => {
    const [isFetching, setIsFetching] = useState(false)
    const [error, setError] = useState(false)
    const [data, setData] = useState<Program[]>()

    useEffect(() => {
        (() => {
            setIsFetching(true);
            try {
                const { results } = movieServices.getTrendingMoviesForWeek();
                setData(results);
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