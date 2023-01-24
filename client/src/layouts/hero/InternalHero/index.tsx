import React from "react";
import { Grid } from "@mui/material";

import { useFeature } from "../../../hooks";
// FIXME: This seems wrong
import Genre from "../../../components/Genre";
import { IMAGE_SIZE_ORIGINAL, POSTER_SIZE_W92 } from "../../../utils/helpers";
import { MediaType, ShowDetailsRawResponse } from "../../../utils/types";

import { Header, Network, Information, Overview, Modal } from "..";



const Hero: React.FC<{
  mediaType: Omit<MediaType, "person">;
  searchedProgram?: ShowDetailsRawResponse | any;
}> = ({ mediaType, searchedProgram }) => {
  const { featureData: data, isSearching } = useFeature(mediaType);
  const featureInfo = searchedProgram || (data && data);

  /**
   * Why are the styles here? Well there no way to load the background currently. 
   * Welp, let's not say that. I'm just too lazy to search right now, but I will 
   * come later to clean this up.
   *   
   */
  const backgroundStyles = {
    backgroundColor: "#00000080",
    backgroundImage: `url(${!isSearching && IMAGE_SIZE_ORIGINAL}${featureInfo?.backdrop_path})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "initial",
    backgroundSize: "cover",
    backgroundBlendMode: "overlay",
  }

  return (
    <Grid container p={4} style={backgroundStyles} direction="row">
      <Grid item xs md={4} display="flex" justifyContent="center">
        <img src={POSTER_SIZE_W92 + featureInfo?.poster_path} alt="" />
      </Grid>
      <Grid item xs md={8}>
        <Network tvId={featureInfo?.id} loading={isSearching} />
        <Header featureData={featureInfo} loading={isSearching} />
        <Information featureData={featureInfo} loading={isSearching} />
        <Overview featureData={featureInfo} loading={isSearching} />
        <Genre featureData={featureInfo} loading={isSearching} />
        <Modal loading={isSearching} featureData={featureInfo} />
      </Grid>
    </Grid>
  );
};

export default Hero;
