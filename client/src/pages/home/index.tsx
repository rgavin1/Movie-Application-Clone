import React from 'react';
import { Container } from '@mui/material';


import { Hero } from '../../layouts'
import ImageSlider from '../../components/ImageSlider';
import { useMoviesTrends, useShows, usePersons } from '../../hooks';

const Home: React.FC = () => {
    const { data: movies } = useMoviesTrends();
    const { data: shows } = useShows();
    const { data: persons } = usePersons();

    return <div className="main">
        <Hero />
        <Container>
            <ImageSlider text="Trending Movies" programs={movies} />
            <ImageSlider text="Trending Tv Shows" programs={shows} />
            <ImageSlider text="Trending Performers" programs={persons} />
        </Container>
    </div>
}

export default Home;