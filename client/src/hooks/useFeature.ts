import { useState, useEffect } from 'react'
import featureService from '../services/feature'
import { Program } from '../utils/types';

// should accept movie and tv 
const useFeature = () => {
    const [featureData, setFeature] = useState<Program>();
    const [isSearching, setIsSearching] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        (async () => {
            setIsSearching(false);
            try {
                const feature = await featureService.getFeature();
                setFeature(feature);
            } catch (e: any) {
                setError(e);
            } finally {
                setIsSearching(true)
            }
        })()
    }, []);

    return { featureData, isSearching, error }
}

export default useFeature