import React, { useState, useEffect } from 'react';
import '../../Assets/styles/Pages/Tv.css';
import Hero from '../Hero';
import ImageSlider from '../ImageSlider';
import Footer from '../Footer';

require('dotenv').config();

const Tv = () => {
    const [feature, setFeature ] = useState([]);
    const [searching, setSearching ] = useState(true);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.REACT_APP_TMDB}`)
        .then(res => res.json())
        .then((items) => {
            if(items.results[0].backdrop_path) {
                setFeature(items.results[0]);
                setSearching(false);
            }
        })
        .catch((error) => {
            setSearching(true);
            console.log(error);
        })
    }, [feature])

    return  <div className="tv">
                    <Hero feature={feature} />
                    <div className="tv__trends">
                        {/* <ImageSlider text="Trending Tv Shows" />
                        <ImageSlider text="Related Tv Shows" /> */}
                    </div>
                <Footer />
            </div>
}

export default Tv;