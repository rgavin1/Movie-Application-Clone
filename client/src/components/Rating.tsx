import React from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Rating: React.FC<{ rate: any }> = ({ rate }) => {
    return  <div className="main__rating">
                <FontAwesomeIcon icon={faStar} /><span>{rate}</span>
            </div>;
} 

export default Rating;

