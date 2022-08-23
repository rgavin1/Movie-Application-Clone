import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
// Components
import Hero from '../../home/Container';
import Information from '../../../../../old-client/src/components/Information';
import Links from '../../../../../old-client/src/components/Links';
// Styles
import '../../../assets/styles/Pages/SingleTv.css';

require('dotenv').config();

const ShowDetails = () => {
    const { id } = useParams();
    const [show, setShow] = useState({});

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchShow = () => {
            fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`)
                .then(res => res.json())
                .then((items) => {
                    setShow(items);
                    // fetchCast();
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        fetchShow();
    }, [id]);

    return <div className="singletv">
        <Hero feature={show} trending={[]} />
        <Links item={show} />
        <Information item={show} media="tv" />
        {/* <CastSlider text="Cast" cast={cast} /> */}
        {/* <ImageSlider text="Trending Movies" genre="tv" trending={trending} />
                <ImageSlider text="Trending Tv Shows" genre="tv" trending={trending} /> */}
    </div>
}

export default ShowDetails;