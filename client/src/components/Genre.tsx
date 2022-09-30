import React from 'react';
import { Stack, Typography, Skeleton, Grid } from '@mui/material';
import { FeatureGenre } from '../utils/helpers';
import { Program, ShowDetailsRawResponse } from '../utils/types';

const SkeletonText3 = () => {
    return (
        <Skeleton
            sx={{
                backgroundColor: "#3a3a3a",
                fontSize: "1.5rem",
                marginTop: "15px"
            }}
            width="55%"
            animation="wave"
            variant="text"
        />
    );
};

const Genre: React.FC<{ featureData?: Program | ShowDetailsRawResponse; loading: boolean; }> = ({ featureData, loading }) => {
    const genre_ids = featureData?.genre_ids || []
    return (
        <Grid item>
            <Stack direction="row">
                {loading ? <SkeletonText3 /> : genre_ids?.map((termid: number, key: number) => {
            return <><Typography key={key} variant="body1" component="span" color="white" marginRight={2}>{FeatureGenre[termid]}</Typography></>
        })}
            </Stack>
        </Grid>);
} 

export default Genre;