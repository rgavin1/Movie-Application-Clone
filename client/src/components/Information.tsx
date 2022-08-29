import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import '../assets/styles/Information.css';

// import MovieList from '../pages/movies/film/FilmDetails';
// import TVList from '../pages/shows/program/ProgramDetails';

const Information: React.FC<{ item: any; media: any }> = ({ item, media }) => {
    return  <div className="information">
                <div className="information__image">
            {/* <LazyLoadImage effect="blur" src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={`${item.title} poster`} /> */}
                </div>
                <div className="information__data">
            {/* { media === "movie" ? <MovieList details={item} /> : <TVList details={item} /> } */}
                </div>
            </div>
}

export default Information;