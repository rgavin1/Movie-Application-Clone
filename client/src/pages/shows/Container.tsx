import React, { useState, useEffect } from 'react';
// import '../../assets/styles/Pages/Tv.css';
import Hero from '../home';
import ImageSlider from '../../../../client/src/components/ImageSlider';
import Footer from '../../../../client/src/layouts/footer/Container';

;

const Tv = () => {
    const [feature, setFeature] = useState([]);
    const [popshows, setShows] = useState([]);
    const [relatedshows, setRelatedshows] = useState([]);
    const [recommendedShows, setRecommendedshows] = useState([]);
    const [topratedShows, setTopRatedShows] = useState([]);

    useEffect(() => {
        const fetchPopShows = () => {
            fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
                .then(res => res.json())
                .then((items) => {
                    const random_num = Math.floor(Math.random() * 19);
                    if (items.results[random_num].backdrop_path !== "undefined") {
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
            fetch(`https://api.themoviedb.org/3/tv/${tv_id}/similar?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`)
                .then(res => res.json())
                .then((items) => {
                    setRelatedshows(items.results);
                })
                .catch((err) => {
                    console.log(err);
                })
        }

        const fetchRecommendedShows = ({ tv_id = 88396 }) => {
            fetch(`https://api.themoviedb.org/3/tv/${tv_id}/recommendations?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`)
                .then(res => res.json())
                .then((items) => {
                    setRecommendedshows(items.results);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        fetchPopShows();
    }, []);



    function fetchTopRatedShows() {
        fetch(`https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`)
            .then(res => res.json())
            .then((items) => {
                setTopRatedShows(items.results);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return <div className="tv">
        <Hero />
        <div className="tv__trends">
            <ImageSlider text="Trending" programs={popshows} />
            <ImageSlider text="Related" programs={relatedshows} />
            <ImageSlider text="Recommended" programs={recommendedShows} />
            <ImageSlider text="Top Rated" programs={topratedShows} />
        </div>
        <Footer />
    </div>
}

export default Tv;