import React from 'react';
import { Grid } from "@mui/material";
import MovieList from '../pages/movies/film/MovieDetailsList';
import ProgramDetails from '../pages/tvShow/program/ProgramDetails';
import { MediaType } from '../utils/types';

const Information: React.FC<{ item: any; media: Omit<MediaType, "person"> }> = ({ item, media }) => {
    return <Grid container id="information">
        <Grid item xs={6}>
            <img width="100%" src={`https://image.tmdb.org/t/p/w500${item?.poster_path}`} alt={`${item?.title} poster`} />
        </Grid>
        <Grid item xs={6}>
            {media === "movie" ? <MovieList details={item} /> : <ProgramDetails details={item} />}
        </Grid>
    </Grid>
}

export default Information;