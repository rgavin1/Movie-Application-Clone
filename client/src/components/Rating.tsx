import React from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Typography } from '@mui/material';

const Rating: React.FC<{ rate: any }> = ({ rate }) => {
    return  <div className="main__rating">
        <FontAwesomeIcon icon={faStar} style={{ color: "yellow", marginRight: "2px" }} /><Typography variant="subtitle1" component="span" color="white">{rate}</Typography>
            </div>;
} 

export default Rating;

