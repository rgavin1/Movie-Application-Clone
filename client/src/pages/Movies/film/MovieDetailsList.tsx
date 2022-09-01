import React from 'react';
import { Grid, List, ListItem } from "@mui/material";

const MovieListItem: React.FC<{ list: any }> = ({ list }) => {
    return <ul>
        {list.map((item: any, id: number) => {
            return <li style={{ textAlign: 'end', display: 'inline-block' }} key={id}>{item.name}</li>
        })}
    </ul>
}

const MovieList: React.FC<{ details: any }> = ({ details }) => {
    return <List id="movie-details">
        <ListItem>
            <span>Belongs To Collection</span><span>{details.belongs_to_collection ? details.belongs_to_collection : '-'}</span>
        </ListItem>
        <ListItem>
            <span>Budget</span><span>${details.budget ? details.budget : "-"}</span>
        </ListItem>
        <ListItem>
            <span>Genres</span><span>{details.genres && <MovieListItem list={details.genres} />}</span>
        </ListItem>
        <ListItem>
            <span>Languages</span><span>{details.spoken_languages && <MovieListItem list={details.spoken_languages} />}</span>
        </ListItem>
        <ListItem>
            <span>Production Companies</span><span>{details.production_companies && <MovieListItem list={details.production_companies} />}</span>
        </ListItem>
        <ListItem>
            <span>Production Countries</span><span>{details.production_countries && <MovieListItem list={details.production_countries} />}</span>
        </ListItem>
        <ListItem>
            <span>Status</span><span>{details.status}</span>
        </ListItem>
        <ListItem>
            <span>Tagline</span><span>{details.tagline ? details.tagline : '-'}</span>
        </ListItem>
        <ListItem>
            <span>Runtime</span><span>{details.runtime ? details.runtime + ' mins' : '-'}</span>
        </ListItem>
        <ListItem>
            <span>Vote Avg</span><span>{details.vote_average}</span>
        </ListItem>
        <ListItem>
            <span>Vote Count</span><span>{details.vote_count}</span>
        </ListItem>
    </List>
}

export default MovieList;