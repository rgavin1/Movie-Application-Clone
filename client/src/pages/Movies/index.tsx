import React from 'react';
// import '../../assets/styles/Pages/Film.css';
import { Hero } from '../../layouts';
import ImageSlider from '../../components/ImageSlider';
import { Container } from '@mui/material';
import { useMoviesTrends, useNowPlayingMovies, useUpcomingMovies, useMoviesTopRated } from '../../hooks';

const Film: React.FC = () => {
    const { data: movies } = useMoviesTrends();
    const { data: nowPlaying } = useNowPlayingMovies();
    const { data: upcoming } = useUpcomingMovies();
    const { data: topRated } = useMoviesTopRated();

    return <div id="movies-page">
        <Hero mediaType="movie" />
        <Container>
            <ImageSlider text="Trending" programs={movies} />
            <ImageSlider text="Now Playing" programs={nowPlaying} />
            <ImageSlider text="Upcoming" programs={upcoming} />
            <ImageSlider text="Top Rated" programs={topRated} />
        </Container>
    </div>
}

export default Film;