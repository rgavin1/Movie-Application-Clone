import React from 'react';
import '../../assets/styles/Main.css';
import Hero from './Container';
import Footer from '../footer/Container';
import ImageSlider from '../../components/ImageSlider';

const Main = ({ feature, trending }) => {
    return  <div className="main">
                <Hero feature={feature} />
                    <div className="main__trends">
                        <ImageSlider text="Trending Movies" genre="movie" trending={trending} />
                        <ImageSlider text="Trending Tv Shows" genre="tv" trending={trending} />
                    </div>
                <Footer />
            </div>
} 

export default Main;