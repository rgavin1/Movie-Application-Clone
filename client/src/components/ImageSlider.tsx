import React from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { Program, PersonRawResult } from '../utils/types';
import '../assets/styles/ImageSlider.css';
import { IMAGE_SIZE_WIDTH_500 } from '../utils/helpers';

const ImageOptions: React.FC<{ program: Program | PersonRawResult }> = ({ program }) => {
  const { poster_path, profile_path, title, name, media_type, id } = program

  let option;

  // Profile
  if (profile_path) {
    option = <img id={`${media_type}-${id}`} width="100%" src={IMAGE_SIZE_WIDTH_500 + profile_path} alt={name + "profile"} />
  }

  // Poster
  if (poster_path) {
    option = <img id={`${media_type}-${id}`} width="100%" src={IMAGE_SIZE_WIDTH_500 + poster_path} alt={title + "poster"} />
  }

  // Blank Person
  if (!profile_path && !poster_path) {
    option = <div id={`${media_type}-${id}`} style={{ width: "100%", backgroundColor: "#333333", height: "273px" }} />
  }

  return <>{option}</>
}

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
          programs?.map((program: Program | PersonRawResult, id: number) =>
            <Link key={id} to={`/${program?.media_type}/${program.id}`}>
              <ImageOptions program={program} />
              <Typography textAlign="center" paddingY={1} color="white" variant="body2" component="div">{program?.title ? program?.title : program.name}</Typography>
            </Link>
          )
          }
      </Slider>
    </>
      );
} 

export default ImageSlider;

