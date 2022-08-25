import React from 'react';
import { Stack, Typography } from '@mui/material';
import { FeatureGenre } from '../utils/helpers';

const Genre: React.FC<{ genres: number[] }> = ({ genres }) => {
    return <Stack direction="row">
        {genres.map((termid: number, key: number) => {
            return <Typography key={key} variant="body1" component="span" color="white" marginRight={2}>{FeatureGenre[termid]}</Typography>
        })}
    </Stack>;
} 

export default Genre;



