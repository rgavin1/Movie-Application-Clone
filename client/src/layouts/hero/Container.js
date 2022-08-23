import React from 'react';
// import { faPlayCircle } from '@fortawesome/free-regular-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Genre from '../../components/Genre';
import Rating from '../../components/Rating';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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

const Network = ({ networks }) => {
    return  <motion.ul variants={childVariant} className="main__contentnetwork ">
                { networks.map(item => {
                    return <li title={item.name} key={item.id}><img className={`logo ${item.name}`} src={`https://image.tmdb.org/t/p/w500${item.logo_path}`} alt={item.name} width="100px" /></li>
                }) }
            </motion.ul>;
}


const Hero = ({ feature }) => {
    return  <motion.div variants={heroVariant} initial="start"  animate="show" exit={{ opacity: 0 }} className="main__hero" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${feature.backdrop_path})`, }}>
                <div className="main__content">
                    <div className="main__container--hidden">
                        { feature.networks && <Network networks={feature.networks} /> }
                    </div>
                    <div className="main__container--hidden">
                        <Link to={`/${feature.media_type}-profile/${feature.id}`}>
                            <motion.h1 variants={childVariant} className="main__contenttitle">{feature.title ? feature.title : feature.name }</motion.h1>
                        </Link>
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

