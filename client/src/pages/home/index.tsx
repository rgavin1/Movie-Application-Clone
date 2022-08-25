import React from 'react';
import { Container } from '@mui/material';


import { Hero, Footer } from '../../layouts'
import ImageSlider from '../../components/ImageSlider';
import { useMovies, useShows, usePersons } from '../../hooks';

const Home: React.FC = () => {
    const { data: movies } = useMovies()
    const { data: shows } = useShows()
    const { data: persons } = usePersons()

    return <div className="main">
        <Hero />
        <Container maxWidth="xl">
            <ImageSlider text="Trending Movies" programs={movies} />
            <ImageSlider text="Trending Tv Shows" programs={shows} />
            <ImageSlider text="Trending Performers" programs={persons} />
        </Container>
        <Footer />
    </div>
}

export default Home;