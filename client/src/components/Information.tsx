import React from 'react';
import { Grid } from "@mui/material";
import MovieList from '../pages/movies/film/MovieDetailsList';
import ProgramDetails from '../pages/tvShow/program/ProgramDetails';
import { MediaType } from '../utils/types';
import { CastSlider } from './Sliders';

const Information: React.FC<{ item: any; media: Omit<MediaType, "person">; cast?: any }> = ({ item, media, cast }) => {
    return <Grid container id="information">
        <Grid item xs={9}>
            {/* <img width="100%" src={`https://image.tmdb.org/t/p/w500${item?.poster_path}`} alt={`${item?.title} poster`} /> */}
            <CastSlider text="Series Cast" teamMembers={cast} />
        </Grid>
        {/* <Grid item xs={4}>
            {media === "movie" ? <MovieList details={item} /> : <ProgramDetails details={item} />}
        </Grid> */}
    </Grid>
}

export default Information;