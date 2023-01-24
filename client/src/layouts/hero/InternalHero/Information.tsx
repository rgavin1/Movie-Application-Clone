import React from 'react'
import { Grid, Stack, Typography } from '@mui/material';

import { SkeletonText2 } from '../../../components/skeletons';
import { ShowDetailsRawResponse, Program } from '../../../utils/types';
import Rating from '../../../components/Rating';

const ReleaseDate: React.FC<{ release: any }> = ({ release }) => {
    const year = release.split("-");
    return year[0];
};

const Information: React.FC<{
    featureData?: Program | ShowDetailsRawResponse; loading: boolean
}> = ({ featureData, loading }) => {
    return (
        <Grid item xs={6}>
            {loading ? <SkeletonText2 /> : <Stack direction="row" justifyContent="space-between">
                {featureData?.release_date && (
                    <Typography variant="subtitle1" component="div" color="white">
                        <ReleaseDate release={featureData?.release_date} />
                    </Typography>
                )}
                <Typography variant="subtitle1" component="div" color="white">
                    <Rating rate={featureData?.vote_average} />
                </Typography>
                <Typography variant="subtitle1" component="div" color="white">
                    {featureData?.vote_count}
                </Typography>
                <Typography variant="subtitle1" component="div" color="white">
                    {featureData?.original_language}
                </Typography>
            </Stack>}
        </Grid>
    );
};

export default Information