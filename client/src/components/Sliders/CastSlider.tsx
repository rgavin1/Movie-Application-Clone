import React from 'react';
import Slider from "react-slick";

import { Typography } from '@mui/material';
import { CastRawResponse, Cast, Crew } from '../../utils/types';

const CastSlider: React.FC<{ text: string; teamMembers: CastRawResponse | undefined }> = ({ text, teamMembers }) => {
  var settings = {
    arrows: true,
    dots: false,
    centerMode: true,
    centerPadding: '15%',
    infinite: true,
    speed: 500,
    slidesToShow: 4,
  };
  // FIXME: This is ugly 
  const castMembers = teamMembers?.cast || [];
  const crewMembers = teamMembers?.crew || [];
  const listOfMembers = [...castMembers as Cast[], ...crewMembers as Crew[]];
  return (
    <div id="cast-slider">
      <Typography color="white" variant="h4" component="div" paddingY={3}>{text}</Typography>
      <Slider {...settings}>
        {
          listOfMembers?.map((item: Cast | Crew, id: number) =>
            <>
              {/* // TODO: Add Link <Link key={id}> */}
              <img width="100%" src={`https://image.tmdb.org/t/p/h632${item?.profile_path}`} alt={`${item?.name} poster`} />
              <Typography textAlign="center" paddingY={1} color="white" variant="body2" component="div">{item?.name}</Typography>
              {/* // </Link> */}
            </>
          )
        }
      </Slider>
    </div>
  );
}

export default CastSlider;

