import React from 'react';
import { Container } from '@mui/material';


import { Hero } from '../../layouts'
import ImageSlider from '../../components/ImageSlider';
import { useMoviesTrends, useTrendingShows, usePersons } from '../../hooks';

const Home: React.FC = () => {
    const { data: movies } = useMoviesTrends();
    const { data: shows } = useTrendingShows();
    const { data: persons } = usePersons();

    return <div className="main">
        <Hero mediaType="movie" />
        <Container>
            <ImageSlider text="Trending Movies" programs={movies} />
            <ImageSlider text="Trending Tv Shows" programs={shows} />
            <ImageSlider text="Trending Performers" programs={persons} />
        </Container>
    </div>
}

export default Home;