import { useState, useEffect } from 'react'
import PersonsServices from '../services/persons'
import { PersonRawResult } from '../utils/types'

const usePersons = () => {
    const [isFetching, setIsFetching] = useState(false)
    const [error, setError] = useState()
    const [data, setData] = useState<PersonRawResult[]>()

    useEffect(() => {
        (async () => {
            setIsFetching(true)
            try {
                const { results } = await PersonsServices.getTrendingPerformers();
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

export default usePersons