import React from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Rating = () => {
    return  <div className="main__rating">
                <FontAwesomeIcon icon={faStar} /><span>10.0</span>
            </div>;
} 

export default Rating;

