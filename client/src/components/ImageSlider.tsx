import React from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { Program, PersonRawResult } from '../utils/types';
import '../assets/styles/ImageSlider.css';

const ImageSlider: React.FC<{ text: string; programs: Program[] | PersonRawResult[] | undefined }> = ({ text, programs }) => {
  var settings = {
    arrows: true,
    dots: false,
    centerMode: true,
    centerPadding: '15%',
    infinite: true,
    speed: 500,
    slidesToShow: 4,
  };
  return (
    <>
      <Typography color="white" variant="h4" component="div" paddingY={3}>{text}</Typography>
      <Slider {...settings}>
          {
          programs?.map((program: Program | PersonRawResult, key: number) =>
            <>
              {/* <Link key={number} to={`/${genre}-profile/${program.id}`}> */}
              <img width="100%" src={`https://image.tmdb.org/t/p/w500${program?.poster_path || program?.profile_path}`} alt={`${program?.title || program.name} poster`} />
              <Typography textAlign="center" paddingY={1} color="white" variant="body2" component="div">{program?.title ? program?.title : program.name}</Typography>
              {/* </Link> */}
            </>
          )
          }
      </Slider>
    </>
      );
} 

export default ImageSlider;

