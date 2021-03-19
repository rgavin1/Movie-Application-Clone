import React from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';

const ImageSlider = ({ text, genre, trending }) => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
      };
      console.log(trending);
      return (
        
        <div className="main__imageslider">
        <div className="main__imagesliderTitle">{text}</div>
        <Slider {...settings}>
          {
            trending.map(item => {
              let poster;
              if(item.media_type === genre){
                poster = <Link to={`/${genre}/${item.id}`}>
                          <div className="main__imageslide">
                            <div className="main__imagecontainer">
                              <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt={`${item.title} poster`} />
                            </div>
                            <div className="main__imageslidename">{item.title ? item.title : item.name }</div>
                         </div>
                        </Link>
              } else {
                poster = '';
              }
              return poster;
            })
          }
        </Slider>
        </div>
      );
} 

export default ImageSlider;

