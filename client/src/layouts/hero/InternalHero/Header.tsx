import React from 'react'
import { Link } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';

import { Program, ShowDetailsRawResponse } from '../../../utils/types';
import { SkeletonHeader } from '../../../components/skeletons';


const Header: React.FC<{ featureData?: Program | ShowDetailsRawResponse; loading: boolean }> = ({
    featureData, loading
}) => {
    return (
        <Grid item>
            <Link
                to={`/${featureData?.media_type}-profile/${featureData?.id}`}
                style={{ textDecoration: "none" }}
            >{loading ? <SkeletonHeader /> :
                <Typography gutterBottom variant="h3" component="div" color="white">
                    {featureData?.title ? featureData?.title : featureData?.name}
                </Typography>}
            </Link>
        </Grid>
    );
};

export default Header