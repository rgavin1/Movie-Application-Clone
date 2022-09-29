import { useState, useEffect } from 'react'
import televisionServices from "../services/television"
import { TelevisionShowDetails } from '../utils/types';

const useTelevisionShowDetails = (id = "213") => {
    const [details, setDetails] = useState<TelevisionShowDetails>();
    const [isloading, setIsLoading] = useState(false);
    const [error, setError] = useState()

    useEffect(() => {
        (async () => {
            setIsLoading(true)
            try {
                const response = await televisionServices.getShowDetailsById(id)
                setDetails(response)
            } catch (e: any) {
                console.log('e', e);
                setError(e)
            }
            setIsLoading(false)
        })()
    }, [id])

    return { details, isloading, error }
}

export default useTelevisionShowDetails