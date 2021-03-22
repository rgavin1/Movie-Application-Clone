import React, { useState, useEffect } from 'react';
import '../../Assets/styles/Pages/Tv.css';
import Hero from '../Hero';
import ImageSlider from '../ImageSlider';
import Footer from '../Footer';
 
require('dotenv').config();

const Tv = () => {
    const [feature, setFeature ] = useState([]);
    const [popshows, setShows ] = useState([]);
    const [relatedshows, setRelatedshows ] = useState([]);
    const [recommendedShows, setRecommendedshows ] = useState([]);
    const [topratedShows, setTopRatedShows ] = useState([]);

    useEffect(() => {
        const fetchPopShows = () => {
            fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.REACT_APP_TMDB}`)
            .then(res => res.json())
            .then((items) => {
                const random_num = Math.floor(Math.random() * 19);
                if(items.results[random_num].backdrop_path !== "undefined") {
                    setFeature(items.results[0]);
                    setShows(items.results);
                    fetchRelatedShows(items.results[0].id);
                    fetchRecommendedShows(items.results[0].id);
                    fetchTopRatedShows();
                }
            })
            .catch((err) => {
                console.log(err);
            })
        }
    
        const fetchRelatedShows = ({ tv_id = 88396 }) => {
            fetch(`https://api.themoviedb.org/3/tv/${tv_id}/similar?api_key=${process.env.REACT_APP_TMDB}&language=en-US&page=1`)
            .then(res => res.json())
            .then((items) => {
                setRelatedshows(items.results);
            })
            .catch((err) => {
                console.log(err);
            })
        }
    
        const fetchRecommendedShows = ({ tv_id = 88396 }) => {
            fetch(`https://api.themoviedb.org/3/tv/${tv_id}/recommendations?api_key=${process.env.REACT_APP_TMDB}&language=en-US&page=1`)
            .then(res => res.json())
            .then((items) => {
                setRecommendedshows(items.results);
            })
            .catch((err) => {
                console.log(err);
            })
        }
        fetchPopShows();  
    },[]);

   

    function fetchTopRatedShows () {
        fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_TMDB}&language=en-US&page=1`)
        .then(res => res.json())
        .then((items) => {
            setTopRatedShows(items.results);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    return  <div className="tv">
                    <Hero feature={feature} />
                    <div className="tv__trends">
                        <ImageSlider text="Trending" genre="tv" trending={popshows}/>
                        <ImageSlider text="Related" genre="tv" trending={relatedshows} override={true} />
                        <ImageSlider text="Recommended" genre="tv" trending={recommendedShows} override={true} />
                        <ImageSlider text="Top Rated" genre="tv" trending={topratedShows} override={true} />
                    </div>
                <Footer />
            </div>
}

export default Tv;