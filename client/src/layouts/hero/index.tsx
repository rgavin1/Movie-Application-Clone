import React from "react";
// import { faPlayCircle } from '@fortawesome/free-regular-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Genre from "../../components/Genre";
import Rating from "../../components/Rating";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { Typography, Grid, Stack } from "@mui/material";
import { useFeature } from "../../hooks";
import { MediaType, Program, ShowDetailsRawResponse } from "../../utils/types";
import { IMAGE_SIZE_ORIGINAL } from "../../utils/helpers";

const Network = () => {
  return {
    /* <Grid item xs={12}>
            {featureData?.networks && <Network networks={featureData?.networks} />}
          </Grid> */
  };
};

const Header: React.FC<{ featureData?: Program | ShowDetailsRawResponse }> = ({
  featureData,
}) => {
  return (
    <Grid item>
      <Link
        to={`/${featureData?.media_type}-profile/${featureData?.id}`}
        style={{ textDecoration: "none" }}
      >
        <Typography gutterBottom variant="h2" component="div" color="white">
          {featureData?.title ? featureData?.title : featureData?.name}
        </Typography>
      </Link>
    </Grid>
  );
};

const Information: React.FC<{
  featureData?: Program | ShowDetailsRawResponse;
}> = ({ featureData }) => {
  return (
    <Grid item xs={6}>
      <Stack direction="row" justifyContent="space-between">
        {featureData?.release_date && (
          <Typography variant="subtitle1" component="div" color="white">
            <ReleaseDate release={featureData?.release_date} />
          </Typography>
        )}
        <Typography variant="subtitle1" component="div" color="white">
          <Rating rate={featureData?.vote_average} />
        </Typography>
        <Typography variant="subtitle1" component="div" color="white">
          {featureData?.vote_count}
        </Typography>
        <Typography variant="subtitle1" component="div" color="white">
          {featureData?.original_language}
        </Typography>
      </Stack>
    </Grid>
    );
  };

const Overview: React.FC<{
  featureData?: Program | ShowDetailsRawResponse;
}> = ({ featureData }) => {
  const overview = featureData?.overview;
  return (
    <Grid item>
      <Typography
        variant="subtitle1"
        component="div"
        color="white"
        marginTop="15px"
        marginBottom="15px"
      >
        {overview}
      </Typography>
      </Grid>
    );
  };

const ReleaseDate: React.FC<{ release: any }> = ({ release }) => {
  const year = release.split("-");
  return year[0];
};

// const Network: React.FC<{ networks: any[] }> = ({ networks }) => {
//   return <motion.ul variants={childVariant} className="main__contentnetwork ">
//     {networks.map((item: any) => {
//       return <li title={item.name} key={item.id}><img className={`logo ${item.name}`} src={`https://image.tmdb.org/t/p/w500${item.logo_path}`} alt={item.name} width="100px" /></li>
//     })}
//   </motion.ul>;
// }

const Hero: React.FC<{
  mediaType: Omit<MediaType, "person">;
  searchedProgram?: ShowDetailsRawResponse | undefined;
}> = ({ mediaType, searchedProgram }) => {
  const { featureData: data } = useFeature(mediaType);
  const featureData = searchedProgram || (data && data);
  return (
    <Grid
      container
      p={5}
      style={{
        backgroundColor: "#00000080",
        backgroundImage: `url(${IMAGE_SIZE_ORIGINAL}${featureData?.backdrop_path})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "initial",
        backgroundSize: "cover",
        backgroundBlendMode: "overlay",
      }}
    >
      <Grid item xs md={6} style={{ paddingTop: "8%", paddingBottom: "10%" }}>
        {/* <Network /> */}
        <Header featureData={featureData} />
        <Information featureData={featureData} />
        <Overview featureData={featureData} />
        <Grid item>
          {featureData?.genre_ids && <Genre genres={featureData?.genre_ids} />}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Hero;
