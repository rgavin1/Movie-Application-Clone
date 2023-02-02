import React from 'react';
import { Grid, Stack, Typography } from "@mui/material";
import MovieList from '../pages/movies/film/MovieDetailsList';
import ProgramDetails from '../pages/tvShow/program/ProgramDetails';
import { MediaType } from '../utils/types';
import { CastSlider } from './Sliders';

const Information: React.FC<{ item: any; media: Omit<MediaType, "person">; cast?: any }> = ({ item, media, cast }) => {
    console.log('item', item)
    return <Grid container id="information">
        <Grid item xs={12}>
            <Typography gutterBottom variant="h3" component="div" color="white">{item?.original_name}</Typography>
        </Grid>
        <Grid item xs={12}>
            <Stack direction="row" spacing={2}>
                <Typography gutterBottom variant="body1" component="div" color="white">{media === "movie" ? "Movie" : "Tv Series"}</Typography>
                <Typography gutterBottom variant="body1" component="div" color="white">{"(Year) From - TO"}</Typography>
                <Typography gutterBottom variant="body1" component="div" color="white">{"Rating"}</Typography>
                <Typography gutterBottom variant="body1" component="div" color="white">{"Time per episode"}</Typography>
            </Stack>
        </Grid>
        <Grid item xs={9}>
            {/* <img width="100%" src={`https://image.tmdb.org/t/p/w500${item?.poster_path}`} alt={`${item?.title} poster`} /> */}
            <CastSlider text="Series Cast" teamMembers={cast} />
            {/* TODO: Replace with images and trailer */}
        </Grid>
        <Grid item xs={3}>
            {media === "movie" ? <MovieList details={item} /> : <ProgramDetails details={item} />}
        </Grid>
    </Grid>
}

export default Information;