import React from 'react'
import { Grid, Typography } from '@mui/material';

import { SkeletonParagraph } from '../../../components/skeletons';
import { ShowDetailsRawResponse, Program } from '../../../utils/types';



const Overview: React.FC<{
    featureData?: Program | ShowDetailsRawResponse; loading: boolean
}> = ({ featureData, loading }) => {
    const overview = featureData?.overview;
    return (
        <Grid item>
            {loading ? <SkeletonParagraph /> : <Typography
                variant="subtitle1"
                component="div"
                color="white"
                marginTop="15px"
                marginBottom="15px"
            >
                {overview}
            </Typography>}
        </Grid>
    );
};

export default Overview