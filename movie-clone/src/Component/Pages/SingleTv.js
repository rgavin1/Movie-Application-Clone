import React, { useState, useEffect } from 'react';
// Components
import Hero from '../Hero';

import { useParams } from 'react-router';

const SingleTv = () => {
    const { id } = useParams();
    const [ show, setShow ] = useState({});

    useEffect(() => {
        fetchPopMovies(id);
    }, [id]);
    
    function fetchPopMovies({ movie_id }){
        fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_TMDB}&language=en-US`)
        .then(res => res.json())
        .then((items) => {
            setShow(items.results);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    console.log(show);
    return  <div className="singletv">
                {/* <Hero feature={shows.find((element) => element.id === id)} /> */}
                <h1>SingleTv - {id}</h1>
            </div>
}

export default SingleTv;