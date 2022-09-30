import React from 'react'
import { Skeleton } from '@mui/material';

const Text1: React.FC = () => {
    return (
        <Skeleton
            sx={{
                backgroundColor: "#3a3a3a",
                fontSize: "2rem",
            }}
            width="35%"
            animation="wave"
            variant="text"
        />
    );
};

export default Text1