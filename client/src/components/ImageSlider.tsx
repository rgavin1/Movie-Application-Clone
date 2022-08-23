import React from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ImageSlider: React.FC<{ text: any; genre: any; trending: any; override: any }> = ({ text, genre, trending, override = false }) => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
      };
      return (
        
        <div className="main__imageslider">
        <div className="main__imagesliderTitle">{text}</div>
        <Slider {...settings}>
          {
              trending.map((item: any, number: any) => {
              let poster;
              if(item.media_type === genre || override){
                poster = <Link key={number} to={`/${genre}-profile/${item.id}`}>
                          <div className="main__imageslide">
                            <div className="main__imagecontainer">
                              <LazyLoadImage width="100%" height="auto" effect="opacity" src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={`${item.title} poster`} />
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

