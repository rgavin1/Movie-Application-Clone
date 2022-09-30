import React from 'react'
import { Skeleton } from '@mui/material';

const Button: React.FC = () => {
    return (
        <Skeleton
            sx={{
                backgroundColor: "#3a3a3a",
                fontSize: "3.5rem",
            }}
            width="23%"
            animation="wave"
            variant="text"
        />
    );
};

export default Button