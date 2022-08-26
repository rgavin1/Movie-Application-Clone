import React from 'react';
// import '../../assets/styles/Pages/Film.css';
import { Hero } from '../../layouts';
import ImageSlider from '../../components/ImageSlider';
import { Container } from '@mui/material';
import { useMoviesTrends, useNowPlayingMovies, useUpcomingMovies } from '../../hooks';

const Film: React.FC = () => {
    const { data: movies } = useMoviesTrends();
    const { data: nowPlaying } = useNowPlayingMovies();
    const { data: upcoming } = useUpcomingMovies();

    return <div id="movies">
        <Hero />
        <Container>
            <ImageSlider text="Trending" programs={movies} />
            <ImageSlider text="Now Playing" programs={nowPlaying} />
            <ImageSlider text="Upcoming" programs={upcoming} />
        </Container>
    </div>
}

export default Film;