import React from 'react';
import '.././Assets/styles/Information.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
// Components
import MovieList from './MovieList';
import TVList from './TVList';

const Information = ({ item, media }) => {
    console.log(item);
    return  <div className="information">
                <div className="information__image">
                    <LazyLoadImage effect="blur" src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={`${item.title} poster`} />
                </div>
                <div className="information__data">
                    { media === "movie" ? <MovieList details={item} /> : <TVList details={item} /> }
                </div>
            </div>
}

export default Information;