import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
// Components
import Hero from '../Hero';
import Information from '../Information';
// Styles
import '../../Assets/styles/Pages/SingleTv.css';

require('dotenv').config();

const SingleTv = () => {
    const { id } = useParams();
    const [ show, setShow ] = useState({});

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_TMDB}&language=en-US`)
        .then(res => res.json())
        .then((items) => {
            setShow(items);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [id]);

    return  <div className="singletv">
                <Hero feature={show} />
                <Information item={show} media="tv"/>
            </div>
}

export default SingleTv;