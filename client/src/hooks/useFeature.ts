import { useState, useEffect } from 'react'
import featureService from '../services/feature'
import { MediaType, Program } from '../utils/types';

const useFeature = (mediaType: Omit<MediaType, "person">) => {
    const [featureData, setFeature] = useState<Program[]>();
    const [isSearching, setIsSearching] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        (async () => {
            setIsSearching(false);
            try {
                const { results } = await featureService.getFeature(mediaType);
                setFeature(results);
            } catch (e: any) {
                setError(e);
            } finally {
                setIsSearching(true)
            }
        })()
    }, [mediaType]);

    return { featureData, isSearching, error }
}

export default useFeature