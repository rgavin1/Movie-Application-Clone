import React from 'react';
// import { faPlayCircle } from '@fortawesome/free-regular-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Genre from './Genre';
import Rating from './Rating';
import { motion } from 'framer-motion';

// Parent Animation
const heroVariant = {
    start: {
        y: '-100%', 
        opacity: 0
    },
    show: {
        y: '0%', 
        opacity: 1,
        transition: { 
            duration: 1.5,
            when: "beforeChildren",
            staggerChildren: 0.4
        }
    }
}

// Children Animation
const childVariant = {
    start: {
        y: '150%', 
    },
    show: {
        y: '0%', 
        transition: { duration: 1.5 }
    }
}

const ReleaseDate = ({ release }) => {
    const year = release.split("-");
    return year[0];
}


const Hero = ({ feature }) => {
    console.log(feature);
    return  <motion.div variants={heroVariant} initial="start"  animate="show" exit={{ opacity: 0 }} className="main__hero" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${feature.backdrop_path})`, }}>
                <div className="main__content">
                    <div className="main__container--hidden">
                        <motion.h1 variants={childVariant} className="main__contenttitle">{feature.title ? feature.title : feature.name }</motion.h1>
                    </div>
                    <div className="main__container--hidden">
                        <motion.div variants={childVariant} className="main__contentmeta">
                            {feature.release_date && <ReleaseDate release={feature.release_date} />}
                            <Rating rate={feature.vote_average} />
                        </motion.div>
                    </div>
                    <div className="main__container--hidden">
                        <motion.p className="main__overview" variants={childVariant} >{feature.overview}</motion.p>
                    </div>
                    <div className="main__container--hidden">
                        <motion.div variants={childVariant}>
                        {feature.genre_ids && <Genre genres={feature.genre_ids} />}
                        </motion.div>
                    </div>
                </div>
                {/* <motion.div variants={childVariant} className="main__playbtn"><FontAwesomeIcon icon={faPlayCircle} /></motion.div> */}
            </motion.div>;
} 

export default Hero;

