import React from "react";
// import { faPlayCircle } from '@fortawesome/free-regular-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Genre from "../../components/Genre";
import Rating from "../../components/Rating";
import { Link } from "react-router-dom";

import { Typography, Grid, Stack, Button, Modal, Box, Skeleton } from "@mui/material";
import { useFeature, useTelevisionShowDetails } from "../../hooks";
import { MediaType, Program, ShowDetailsRawResponse } from "../../utils/types";
import { IMAGE_SIZE_ORIGINAL, IMAGE_SIZE_WIDTH_500_LOGO } from "../../utils/helpers";

const SkeletonParagraph = () => {
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

const SkeletonText2 = () => {
  return (
    <Skeleton
      sx={{
        backgroundColor: "#3a3a3a",
        fontSize: "1.5rem",
        marginBottom: "15px"
      }}
      width="60%"
      animation="wave"
      variant="text"
    />
  );
};

const SkeletonText = () => {
  return (
    <Skeleton
      sx={{
        backgroundColor: "#3a3a3a",
        fontSize: "2rem",
      }}
      width="35%"
      animation="wave"
      variant="text"
    />
  );
};

const SkeletonButton = () => {
  return (
    <Skeleton
      sx={{
        backgroundColor: "#3a3a3a",
        fontSize: "3.5rem",
      }}
      width="23%"
      animation="wave"
      variant="text"
    />
  );
};

const SkeletonHeader = () => {
  return (
    <Skeleton
      sx={{
        backgroundColor: "#3a3a3a",
        fontSize: "4.5rem",
      }}
      width="100%"
      animation="wave"
      variant="text"
    />
  );
};

// TODO: Create the list of networks
const Network: React.FC<{ tvId?: number; loading: boolean }> = ({ tvId = "213", loading }) => {
  const { details } = useTelevisionShowDetails(tvId as string);
  const response = details?.networks[0];
  const img = `${IMAGE_SIZE_WIDTH_500_LOGO}${response?.logo_path}`;
  return <>{loading ? <SkeletonText /> : <img src={img} width="80px" alt={response?.name} />}</>
};

const Header: React.FC<{ featureData?: Program | ShowDetailsRawResponse; loading: boolean }> = ({
  featureData, loading
}) => {
  return (
    <Grid item>
      <Link
        to={`/${featureData?.media_type}-profile/${featureData?.id}`}
        style={{ textDecoration: "none" }}
      >{loading ? <SkeletonHeader /> :
        <Typography gutterBottom variant="h3" component="div" color="white">
          {featureData?.title ? featureData?.title : featureData?.name}
          </Typography>}
      </Link>
    </Grid>
  );
};

const Information: React.FC<{
  featureData?: Program | ShowDetailsRawResponse; loading: boolean
}> = ({ featureData, loading }) => {
  return (
    <Grid item xs={6}>
      {loading ? <SkeletonText2 /> : <Stack direction="row" justifyContent="space-between">
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
      </Stack>}
    </Grid>
    );
  };

const Overview: React.FC<{
  featureData?: Program | ShowDetailsRawResponse; loading: boolean
}> = ({ featureData, loading }) => {
  const overview = featureData?.overview;
  return (
    <Grid item>
      {loading ? <SkeletonParagraph /> : <Typography
        variant="subtitle1"
        component="div"
        color="white"
        marginTop="15px"
        marginBottom="15px"
      >
        {overview}
      </Typography>}
      </Grid>
    );
  };

const ReleaseDate: React.FC<{ release: any }> = ({ release }) => {
  const year = release.split("-");
  return year[0];
};

const Hero: React.FC<{
  mediaType: Omit<MediaType, "person">;
  searchedProgram?: ShowDetailsRawResponse | undefined;
}> = ({ mediaType, searchedProgram }) => {
  const { featureData: data, isSearching } = useFeature(mediaType);
  const featureData = searchedProgram || (data && data);
  const styles = {
    backgroundColor: "#00000080",
    backgroundImage: `url(${!isSearching && IMAGE_SIZE_ORIGINAL}${featureData?.backdrop_path})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "initial",
    backgroundSize: "cover",
    backgroundBlendMode: "overlay",
  }

  // Modal Functions
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const modalStyles = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    bgcolor: '#000',
    border: '2px solid #000',
    boxShadow: 24,
  };

  const YOUTUBE_BASE_URL = "https://www.youtube.com/embed/";
  const TEST_YT_ID = "tgbNymZ7vqY";
  return (
    <Grid container p={5} style={styles}>
      <Grid item xs md={6} style={{ paddingTop: "5%", paddingBottom: "5%" }}>
        <Network tvId={featureData?.id} loading={isSearching} />
        <Header featureData={featureData} loading={isSearching} />
        <Information featureData={featureData} loading={isSearching} />
        <Overview featureData={featureData} loading={isSearching} />
        <Genre featureData={featureData} loading={isSearching} />
        <Grid item>
          {/* TODO: Convert this into a component */}
          {isSearching ? <SkeletonButton /> : <Button sx={{ marginTop: "15px" }} color="secondary" variant="contained" onClick={() => setIsModalOpen(!isModalOpen)}>Watch Trailer</Button>}
          <Modal
            open={isModalOpen}
            onClose={() => setIsModalOpen(!isModalOpen)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={modalStyles}>
              <iframe id="trailer-model" title="trailer-model" width="100%" height="500px" style={{ border: "none" }} src={`${YOUTUBE_BASE_URL + TEST_YT_ID}?autoplay=1`} />
            </Box>
          </Modal>
        </Grid>

      </Grid>
    </Grid>
  );
};

export default Hero;
