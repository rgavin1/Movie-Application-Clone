import React from 'react';
import { Container } from '@mui/material';


import { Hero } from '../../layouts'
import ImageSlider from '../../components/ImageSlider';
import { useMoviesTrends, useTrendingShows, usePersons } from '../../hooks';

const Home: React.FC = () => {
    const { data: persons } = usePersons();
    const { data: movies } = useMoviesTrends();
    const { data: shows } = useTrendingShows();

    return <div className="main">
        <Hero mediaType="movie" searchedProgram={undefined} />
        <Container>
            <ImageSlider text="Trending Movies" programs={movies} />
            <ImageSlider text="Trending Tv Shows" programs={shows} />
            <ImageSlider text="Trending Performers" programs={persons} />
        </Container>
    </div>
}

export default Home;