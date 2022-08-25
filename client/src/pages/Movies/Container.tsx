import React, { useState, useEffect } from 'react';
// import '../../assets/styles/Pages/Film.css';
import Hero from '../home';
import ImageSlider from '../../../../client/src/components/ImageSlider';
import { Footer } from '../../layouts';


const Film = () => {
    const [feature, setFeature] = useState([]);
    const [popMovies, setMovies] = useState([]);
    const [nowPlaying, setNowPlaying] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);

    useEffect(() => {
        const fetchPopMovies = () => {
            fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
                .then(res => res.json())
                .then((items) => {
                    const random_num = Math.floor(Math.random() * 19);
                    setFeature(items.results[random_num]);
                    setMovies(items.results);
                    fetchNowPlayingMovies();
                    fetchUpcomingMovies();
                })
                .catch((err) => {
                    console.log(err);
                })
        }

        const fetchNowPlayingMovies = () => {
            fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`)
                .then(res => res.json())
                .then((items) => {
                    setNowPlaying(items.results);
                })
                .catch((err) => {
                    console.log(err);
                })
        }

        const fetchUpcomingMovies = () => {
            fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&page=1`)
                .then(res => res.json())
                .then((items) => {
                    setUpcomingMovies(items.results);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        fetchPopMovies();
    }, []);



    return <div className="film">
        <Hero />
        <div className="film__trends">
            <ImageSlider text="Trending Movies" programs={popMovies} />
            <ImageSlider text="Now Playing" programs={nowPlaying} />
            <ImageSlider text="Upcoming" programs={upcomingMovies} />
        </div>
        <Footer />
    </div>
}

export default Film;