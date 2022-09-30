import React from 'react'
import { Skeleton } from '@mui/material';

const Header: React.FC = () => {
    return (
        <Skeleton
            sx={{
                backgroundColor: "#3a3a3a",
                fontSize: "4.5rem",
            }}
            width="100%"
            animation="wave"
            variant="text"
        />
    );
};

export default Header