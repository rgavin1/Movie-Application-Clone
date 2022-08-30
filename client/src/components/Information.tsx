import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Grid } from "@mui/material";

// import '../assets/styles/Information.css';

import MovieList from '../pages/movies/film/FilmDetails';
import ProgramDetails from '../pages/tvShow/program/ProgramDetails';


const Information: React.FC<{ item: any; media: any }> = ({ item, media }) => {
    return <Grid container id="information">
        <Grid item xs={5}>
            <LazyLoadImage effect="blur" src={`https://image.tmdb.org/t/p/w342${item.poster_path}`} alt={`${item.title} poster`} />
        </Grid>
        <Grid item xs={7}>
            {media === "movie" ? <MovieList details={item} /> : <ProgramDetails details={item} />}
        </Grid>
    </Grid>
}

export default Information;