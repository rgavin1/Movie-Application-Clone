import React from 'react';
import { FeatureGenre } from '../utils/helpers';
import { Typography, Stack } from '@mui/material';
// import List from '../assets/data/genres.json';

const Genre: React.FC<{ genres: any }> = ({ genres }) => {
    return <Stack direction="row">
        {genres.map((termid: number, key: any) => {
            return <Typography key={key} variant="body1" component="span" color="white" marginRight={1}>{FeatureGenre[termid]}</Typography>
        })}
    </Stack>;
} 

export default Genre;



