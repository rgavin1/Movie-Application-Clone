import { useState, useEffect } from 'react'
import movieServices from '../services/movies'
import { Program } from '../utils/types'

const useUpcomingMovies = () => {
    const [isFetching, setIsFetching] = useState(false)
    const [data, setData] = useState<Program[]>()
    const [error, setError] = useState()
    useEffect(() => {
        (async () => {
            setIsFetching(true)
            try {
                const { results } = await movieServices.fetchUpcomingMovies();
                setData(results);
            } catch (e: any) {
                setError(e);
            } finally {
                setIsFetching(false)
            }
        })()
    })
    return { data, isFetching, error }
}

export default useUpcomingMovies