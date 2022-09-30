import React from 'react'
import { Skeleton } from '@mui/material';

const Paragraph: React.FC = () => {
    const lineWidths = [100, 100, 100, 100, 50]
    return (
        <>
            {lineWidths.map((width) => {
                return <Skeleton
                    sx={{
                        backgroundColor: "#3a3a3a",
                        fontSize: "1rem",
                    }}
                    width={width + "%"}
                    animation="wave"
                    variant="text"
                />
            })}
        </>
    );
};

export default Paragraph