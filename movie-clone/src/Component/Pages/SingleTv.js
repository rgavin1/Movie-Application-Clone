import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
// Components
import Hero from '../Hero';
import Information from '../Information';
import Links from '../Links';
import CastSlider from '../CastSlider';
// Styles
import '../../Assets/styles/Pages/SingleTv.css';

require('dotenv').config();

const SingleTv = () => {
    const { id } = useParams();
    const [ show, setShow ] = useState({});
    const [ cast, setCast ] = useState([]);

    useEffect(() => {
        fetchShow();
        window.scrollTo(0, 0);
    }, [id]);

    function fetchShow(){
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_TMDB}&language=en-US`)
        .then(res => res.json())
        .then((items) => {
            setShow(items);
            fetchCast();
        })
        .catch((err) => {
            console.log(err);
        })
    }
    function fetchCast(){
        fetch(`https://api.themoviedb.org/3/tv/85271/credits?api_key=${process.env.REACT_APP_TMDB}&language=en-US`)
        .then(res => res.json())
        .then((items) => {
            setCast(items.cast);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    console.log(show);
    return  <div className="singletv">
                <Hero feature={show} />
                <Links item={show} />
                <Information item={show} media="tv"/>
                {/* <CastSlider text="Cast" cast={cast} /> */}
                {/* <ImageSlider text="Trending Movies" genre="tv" trending={trending} />
                <ImageSlider text="Trending Tv Shows" genre="tv" trending={trending} /> */}
            </div>
}

export default SingleTv;