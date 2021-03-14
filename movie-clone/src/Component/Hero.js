import React from 'react';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Genre from './Genre';
import Rating from './Rating';

const Hero = () => {
    return  <div className="main__hero">
                <div className="main__content">
                    <h1 className="main__contenttitle">Star Wars The Last Jedi</h1>
                    <span>2017</span>
                    <Rating />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...</p>
                    <Genre />
                </div>
                <div className="main__playbtn"><FontAwesomeIcon icon={faPlayCircle} /></div>
            </div>;
} 

export default Hero;

