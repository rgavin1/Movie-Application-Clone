import React from 'react';
// import { faPlayCircle } from '@fortawesome/free-regular-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Genre from '../../components/Genre';
import Rating from '../../components/Rating';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { Typography, Grid, Stack } from '@mui/material';

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

const ReleaseDate: React.FC<{ release: any }> = ({ release }) => {
  const year = release.split("-");
  return year[0];
}

const Network: React.FC<{ networks: any[] }> = ({ networks }) => {
  return <motion.ul variants={childVariant} className="main__contentnetwork ">
    {networks.map((item: any) => {
      return <li title={item.name} key={item.id}><img className={`logo ${item.name}`} src={`https://image.tmdb.org/t/p/w500${item.logo_path}`} alt={item.name} width="100px" /></li>
    })}
  </motion.ul>;
}


const Hero: React.FC<{ feature: any }> = ({ feature }) => {
  return (
    <motion.div
      variants={heroVariant}
      initial="start"
      animate="show"
      exit={{ opacity: 0 }}
      style={{
        backgroundColor: "#00000080",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${feature.backdrop_path})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "initial",
        backgroundSize: "cover",
        backgroundBlendMode: "overlay"
      }}
    >
      <Grid container p={5}>
        <Grid item xs md={6} style={{ paddingTop: "8%", paddingBottom: "5%" }}>
          <Grid item xs={12}>
            {feature.networks && <Network networks={feature.networks} />}
          </Grid>
          <Grid item>
            <Link to={`/${feature.media_type}-profile/${feature.id}`} style={{ textDecoration: "none" }}>
              <motion.h1 variants={childVariant} style={{ marginTop: '0' }}>
                <Typography gutterBottom variant="h2" component="div" color="white">
                  {feature.title ? feature.title : feature.name}
                </Typography>
              </motion.h1>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <motion.div variants={childVariant} id="feature-metadata">
              <Stack direction="row" justifyContent="space-between">
                {feature.release_date && (
                  <Typography variant="subtitle1" component="div" color="white">
                    <ReleaseDate release={feature.release_date} />
                  </Typography>
                )}
                <Typography variant="subtitle1" component="div" color="white">
                  <Rating rate={feature.vote_average} />
                </Typography>
                <Typography variant="subtitle1" component="div" color="white">
                  {feature.vote_count}
                </Typography>
                <Typography variant="subtitle1" component="div" color="white">
                  {feature.original_language}
                </Typography>
              </Stack>
            </motion.div>
          </Grid>
          <Grid item>
            <motion.p id="feature-overview" variants={childVariant}>
              <Typography variant="subtitle1" component="div" color="white">
                {feature.overview}
              </Typography>
            </motion.p>
          </Grid>
          <Grid item xs={6}>
            <motion.div variants={childVariant}>
              {feature.genre_ids && <Genre genres={feature.genre_ids} />}
            </motion.div>
          </Grid>
        </Grid>
      </Grid>
      {/* <motion.div variants={childVariant} className="main__playbtn"><FontAwesomeIcon icon={faPlayCircle} /></motion.div> */}
    </motion.div>
  );
};

export default Hero;

