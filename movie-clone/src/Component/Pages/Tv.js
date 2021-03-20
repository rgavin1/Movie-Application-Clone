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
            const random_num = Math.floor(Math.random() * 19);
            if(items.results[random_num].backdrop_path !== "undefined") {
                setFeature(items.results[0]);
                setSearching(false);
            }
        })
        .catch((err) => {
            setSearching(true);
            console.log(err);
        })
    }, [searching])

    return  <div className="tv">
                    <Hero feature={feature} />
                    <div className="tv__trends">
                        <ImageSlider text="Trending Tv Shows" />
                        {/* <ImageSlider text="Related Tv Shows" /> */}
                    </div>
                <Footer />
            </div>
}

export default Tv;