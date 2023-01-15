import React from "react";
import { Grid } from "@mui/material";

import { useFeature } from "../../../hooks";
// FIXME: This seems wrong
import Genre from "../../../components/Genre";
import { IMAGE_SIZE_ORIGINAL } from "../../../utils/helpers";
import { MediaType, Program, ShowDetailsRawResponse } from "../../../utils/types";

import { Header, Network, Information, Overview, Modal } from "..";



const Hero: React.FC<{
  mediaType: Omit<MediaType, "person">;
  searchedProgram?: ShowDetailsRawResponse;
}> = ({ mediaType, searchedProgram }) => {
  const { featureData: data, isSearching } = useFeature(mediaType);
  const featureInfo = searchedProgram || (data && data);

  /**
   * Why are the styles here? Well there no way to load the background currently. 
   * Welp, let's not say that. I'm just too lazy to search right now, but I will 
   * come later to clean this up.
   *   
   */
  const styles = {
    backgroundColor: "#00000080",
    backgroundImage: `url(${!isSearching && IMAGE_SIZE_ORIGINAL}${featureInfo?.backdrop_path})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "initial",
    backgroundSize: "cover",
    backgroundBlendMode: "overlay",
  }

  return (
    <Grid container p={5} style={styles}>
      <Grid item xs md={6} style={{ paddingTop: "5%", paddingBottom: "5%" }}>
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
