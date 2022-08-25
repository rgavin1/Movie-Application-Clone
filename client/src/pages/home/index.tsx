import React from 'react';
import { Container } from '@mui/material';


import { Hero, Footer } from '../../layouts'
import ImageSlider from '../../components/ImageSlider';
import { useMovies, useShows } from '../../hooks';

const Home: React.FC = () => {
    const { data: movies } = useMovies()
    const { data: shows } = useShows()

    return <div className="main">
        <Hero />
        <Container maxWidth="xl">
            <ImageSlider text="Trending Movies" programs={movies} />
            <ImageSlider text="Trending Tv Shows" programs={shows} />
        </Container>
        <Footer />
    </div>
}

export default Home;