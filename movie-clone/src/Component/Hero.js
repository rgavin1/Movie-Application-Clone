import React from 'react';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Genre from './Genre';
import Rating from './Rating';

const ReleaseDate = ({ release }) => {
    const year = release.split("-");
    return year[0];
}


const Hero = ({ feature }) => {
    return  <div className="main__hero" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${feature.backdrop_path})`, }}>
                <div className="main__content">
                    <h1 className="main__contenttitle">{feature.title}</h1>
                    <div className="main__contentmeta">
                        {feature.release_date && <ReleaseDate release={feature.release_date} />}
                        <Rating rate={feature.vote_average} />
                    </div>
                    <p>{feature.overview}</p>
                    {feature.genre_ids && <Genre genres={feature.genre_ids} />}
                </div>
                <div className="main__playbtn"><FontAwesomeIcon icon={faPlayCircle} /></div>
            </div>;
} 

export default Hero;

