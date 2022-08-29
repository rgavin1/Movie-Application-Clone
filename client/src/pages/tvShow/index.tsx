import React from 'react';

import { Hero } from '../../layouts';
import ImageSlider from '../../components/ImageSlider';
import { Container } from '@mui/material';
import { useTrendingShows, useAiringToday, useFetchOnAir } from '../../hooks';

const Television: React.FC = () => {
    const { data: trending } = useTrendingShows();
    const { data: airingToday } = useAiringToday();
    const { data: onAir } = useFetchOnAir();

    return <div className="tv-page">
        <Hero mediaType="tv" />
        <Container>
            <ImageSlider text="Trending" programs={trending} />
            <ImageSlider text="Airing Today" programs={airingToday} />
            <ImageSlider text="On Air" programs={onAir} />
        </Container>
    </div>
}

export default Television;