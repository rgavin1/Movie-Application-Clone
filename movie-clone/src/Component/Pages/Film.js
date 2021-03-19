import React, { useState, useEffect }  from 'react';
import '../../Assets/styles/Pages/Film.css';
import Hero from '../Hero';
import ImageSlider from '../ImageSlider';
import Footer from '../Footer';

require('dotenv').config();

const Film = () => {
    const [feature, setFeature ] = useState([]);
    const [searching, setSearching ] = useState(true);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_TMDB}`)
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
    }, [feature]);

    return  <div className="film">
                <Hero feature={feature} />
                    <div className="film__trends">
                        {/* <ImageSlider text="Trending Movies" />
                        <ImageSlider text="Related Movies" /> */}
                    </div>
                <Footer />
            </div>
}

export default Film;