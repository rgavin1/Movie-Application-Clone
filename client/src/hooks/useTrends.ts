import { useState, useEffect } from 'react'
import featureService from '../services/feature'
import { Program } from '../utils/types';

const useFeature = () => {
    const [trendingList, setTrendingList] = useState<Program[]>([]);
    const [isSearching, setIsSearching] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        (async () => {
            setIsSearching(false);
            try {
                const trending = await featureService.getTrending();
                setTrendingList(trending);
            } catch (e: any) {
                setError(e);
            } finally {
                setIsSearching(true)
            }
        })()
    }, []);

    return { trendingList, isSearching, error }
}

export default useFeature