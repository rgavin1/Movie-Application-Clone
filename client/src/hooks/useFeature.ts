import { useState, useEffect } from 'react'
import featureService from '../services/feature'
import { DEFAULT_TIMEOUT } from '../utils/helpers';
import { MediaType, Program } from '../utils/types';

const useFeature = (mediaType: Omit<MediaType, "person">) => {
    const [featureData, setFeature] = useState<Program>();
    const [featureList, setFeatureList] = useState<Program[]>();
    const [isSearching, setIsSearching] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        (async () => {
            setIsSearching(true);
            try {
                const data = await featureService.getFeatureByMedia(mediaType);
                setFeature(data);
                setFeatureList([])
            } catch (e: any) {
                setError(e);
            } finally {
                setTimeout(() => {
                    setIsSearching(false);
                }, DEFAULT_TIMEOUT)
            }
        })()
    }, [mediaType]);

    return { featureData, featureList, isSearching, error }
}

export default useFeature