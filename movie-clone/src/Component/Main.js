import React from 'react';
import '../Assets/styles/Main.css';
import Hero from './Hero';
import Footer from './Footer';
import ImageSlider from './ImageSlider';

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