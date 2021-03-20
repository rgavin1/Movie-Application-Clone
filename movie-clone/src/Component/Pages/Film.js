import React, { useState, useEffect }  from 'react';
import '../../Assets/styles/Pages/Film.css';
import Hero from '../Hero';
// import ImageSlider from '../ImageSlider';
import Footer from '../Footer';

require('dotenv').config();

const Film = () => {
    const [feature, setFeature ] = useState([]);
    const [searching, setSearching ] = useState(true);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_TMDB}`)
        .then(res => res.json())
        .then((items) => {
            const random_num = Math.floor(Math.random() * 19);
            if(items.results[random_num].backdrop_path !== "undefined") {
                setFeature(items.results[random_num]);
                setSearching(false);
            }
        })
        .catch((err) => {
            setSearching(true);
            console.log(err);
        })
    }, [searching]);
    
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