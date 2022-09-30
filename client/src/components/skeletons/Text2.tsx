import React from 'react'
import { Skeleton } from '@mui/material';

const Text2: React.FC = () => {
    return (
        <Skeleton
            sx={{
                backgroundColor: "#3a3a3a",
                fontSize: "1.5rem",
                marginBottom: "15px"
            }}
            width="60%"
            animation="wave"
            variant="text"
        />
    );
};

export default Text2