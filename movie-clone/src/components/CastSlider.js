import React from 'react';
import Slider from "react-slick";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const CastSlider = ({ text, cast }) => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
      };
      return (
        
        <div className="main__castslider">
        <div className="main__castsliderTitle">{text}</div>
        <Slider {...settings}>
          {
            cast.map((item) => {
                return  <div className="main__castslide">
                            <div className="main__castcontainer">
                              <LazyLoadImage width="100%" height="auto" effect="opacity" src={`https://image.tmdb.org/t/p/h632${item.profile_path}`} alt={`${item.title} poster`} />
                            </div>
                            <div className="main__castslidename">{item.name }</div>
                         </div>
            })
          }
        </Slider>
        </div>
      );
} 

export default CastSlider;

